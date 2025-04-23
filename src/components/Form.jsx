import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setMessage("E-mail saved!");
      setIsError(false);
    } else {
      setMessage("Whoops! Make sure it is your e-mail");
      setIsError(true);
    }
  };

  return (
    <div className="form">
      <div className="content">
        <div className="joined">35.000+ ALREADY JOINED</div>
        <div className="tittle">Stay up-to-date with what we're doing</div>
        <form className="formLine" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="example@gamil.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isError ? "input error" : "input"}
          />

          <button type="submit">Contact Us</button>
        </form>
        <div className={isError ? "error" : null}>
          {message && <div>{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default Form;

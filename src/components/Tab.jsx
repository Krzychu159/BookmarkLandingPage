import { useState } from "react";
import "./Tab.css";

function Tab() {
  const [show, setShow] = useState("first");

  const content = {
    first: {
      title: "Bookmark in one click",
      text: "Organise your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites",
      img: "images/illustration-features-tab-1.svg",
    },
    second: {
      title: "Intelligent Search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: "images/illustration-features-tab-2.svg",
    },
    third: {
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: "images/illustration-features-tab-3.svg",
    },
  };

  return (
    <>
      {" "}
      <div class="feauters">
        <div class="tittle">Feauters</div>
        <div class="text">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can acess
          them on the go.
        </div>
        <div class="bookmarks">
          <nav>
            <ul>
              <li>
                <a onClick={() => setShow("first")}>Simple bookmarking</a>
              </li>
              <li>
                <a onClick={() => setShow("second")}>Speedy Searching</a>
              </li>
              <li>
                <a onClick={() => setShow("third")}>Easy Sharing</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="second">
        <div class="secondLeft">
          <img src={content[show].img} alt="" />
        </div>
        <div class="secondRight">
          <div className="content">
            <div class="tittle">{content[show].title}</div>
            <div class="text">{content[show].text}</div>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab;

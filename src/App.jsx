import "./App.css";
import Form from "./components/Form";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <section>
        <div class="header">
          <div class="logo">
            <img src="images/logo-bookmark.svg" alt="" />
          </div>
          <div class="menu">
            <nav>
              <ul>
                <li>
                  <a href="#">features</a>
                </li>
                <li>
                  <a href="#">pricing</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="first">
          <div class="firstLeft">
            <div class="tittle">A Simple Bookmark Manager</div>
            <div class="text">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantlu. Try it
              for free.
            </div>
            <div class="buttons">
              <button class="chrome">Get in on chrome</button>
              <button class="firefox">Get in on Firefox</button>
            </div>
          </div>
          <div class="firstRight">
            <div>
              <img src="images/illustration-hero.svg" alt="" />
            </div>
          </div>
        </div>

        <Tab />

        <div class="extension">
          <div class="tittle">Download the extension</div>
          <div class="text">
            We've got more browers in the pipeline. Please do let us know if
            you,ve got a favourite you'd like us to prioritize.
          </div>
          <div class="browsers">
            <div class="browser">
              <div class="browserInfo">
                <div>
                  <img src="images/logo-chrome.svg" alt="" />
                </div>
                <div class="name">Add to Chrome</div>
                <div class="version">Minimum version 6.2</div>
              </div>
              <div class="browserButton">
                <button>Add & Install Extension</button>
              </div>
            </div>
            <div class="browser">
              <div class="browserInfo">
                <div>
                  <img src="images/logo-firefox.svg" alt="" />
                </div>
                <div class="name">Add to Chrome</div>
                <div class="version">Minimum version 6.2</div>
              </div>
              <div class="browserButton">
                <button>Add & Install Extension</button>
              </div>
            </div>
            <div class="browser">
              <div class="browserInfo">
                <div>
                  <img src="images/logo-opera.svg" alt="" />
                </div>
                <div class="name">Add to Chrome</div>
                <div class="version">Minimum version 6.2</div>
              </div>
              <div class="browserButton">
                <button>Add & Install Extension</button>
              </div>
            </div>
          </div>
        </div>
        <div class="questions">
          <div class="tittle">Frequently Asked Qestions</div>
          <div class="text">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </div>

          <div></div>
          <button>More Info</button>
        </div>
      </section>
      <Form />
      <div class="footer">
        <div class="content">
          <div class="logo">
            <img src="images/logo-bookmark.svg" alt="" />
          </div>
          <div class="menu">
            <div>Feauters</div>
            <div>Pricing</div>
            <div>Contact</div>
          </div>
          <div class="socialmedia">
            <div class="logo">
              <img src="images/icon-facebook.svg" alt="" />
            </div>
            <div class="logo">
              <img src="images/icon-twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

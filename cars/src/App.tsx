import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <header>
        <div className="header-container">
          <div className="links">
            <a href="#">Main page</a>
            <a href="#">My NFC</a>
          </div>
          <div>
            <button>
              <a href="#">Connect</a>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="content">
          <img src="" alt="car1" />
          <img src="" alt="car2" />
          <img src="" alt="car3" />
          <img src="" alt="car4" />
          <img src="" alt="car5" />
          <img src="" alt="car6" />
          <img src="" alt="car7" />
          <img src="" alt="car8" />
        </div>
      </main>
      <footer></footer>
    </body>
  );
}

export default App;

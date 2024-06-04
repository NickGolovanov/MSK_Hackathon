import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Card({ imagePath }: { imagePath: string }) {
  return (
    <div className="card">
      <img src={imagePath} alt="car" className="image" />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  let image1 = "./src/assets/image2.png";
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
          <Card imagePath={image1} />
          <Card imagePath={image1} />
          <Card imagePath={image1} />
          <Card imagePath={image1} />
          <Card imagePath={image1} />
          <Card imagePath={image1} />
          <Card imagePath={image1} />
        </div>
      </main>
      <footer></footer>
    </body>
  );
}

export default App;

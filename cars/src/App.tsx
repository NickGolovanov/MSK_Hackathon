import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Card(props : any) {
  return (
    <div className="card">
      <img src={props.imagePath} alt="car" className="image" />
      <p>{props.paragraph}</p>
      <p>{props.price}</p>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  let image1 = "./src/assets/image2.png";
  let image2 = "./src/assets/image 3.png";
  let image3 = "./src/assets/image 4.png";
  let image4 = "./src/assets/image 5.png";
  let image5 = "./src/assets/image 6.png";
  let image6 = "./src/assets/image 7.png";
  let image7 = "./src/assets/image 8.png";

  let car1 = "Car1";
  let car2 = "Car2";
  let car3 = "Car3";
  let car4 = "Car4";
  let car5 = "Car5";
  let car6 = "Car6";
  let car7 = "car7";

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
          <Card imagePath = {image1} paragraph = {car1} price ={21} />
          <Card imagePath = {image2} paragraph = {car2} price ={22} />
          <Card imagePath = {image3} paragraph = {car3} price ={23} />
          <Card imagePath = {image4} paragraph = {car4} price ={24} />
          <Card imagePath = {image5} paragraph = {car5} price ={25} />
          <Card imagePath = {image6} paragraph = {car6} price ={26} />
          <Card imagePath = {image7} paragraph = {car7} price ={27} />
        </div>
      </main>
      <footer></footer>
    </body>
  );
}

export default App;

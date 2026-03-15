import React from "react";
import "./App.css";

function App() {
  const name = "Тетьяна❤❤❤";
  const imageUrl =
    "https://i.pinimg.com/736x/94/e2/94/94e294c02450d7592f351c57f26478e6.jpg";
  const site = {
    siteName: " steam",
    url: "https://steamcommunity.com/profiles/76561199782577147/",
  };

  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;
  const colors = ["black", "purple", "pink"];

  return (
    <div>
      <h1>Hi {name}</h1>
      <p>Ласкаво просимо!</p>
      <img src={imageUrl} alt="" />

      <p>
        Мій улюблений сайтік
        <a href={site.url}>{site.siteName}</a>
      </p>
      <p>
        {num1} + {num2} = {sum}
      </p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import logo from "./assets/sausage-party.png";
import Image from "./Image";
import data from "./tools/data";

function Grid() {
  const [cards, setCards] = useState([]);
  const shuffleCards = () => {
    const shuffledCards = [...data]
      .sort(() => Math.random() - 0.5)
      .map((datas) => ({ ...datas, id: Math.random() }));
    setCards(shuffledCards);
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="flex-col text-center justify-center">
      <img className="w-48 m-auto pb-20" src={logo} alt="" />
      <ul className="flex flex-wrap h-full w-2/4 m-auto gap-5">
        {cards.map((datas) => (
          <Image datas={datas} />
        ))}
      </ul>
    </div>
  );
}

export default Grid;

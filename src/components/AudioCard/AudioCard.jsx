// src/components/AudioCards.jsx
import React from "react";
import beigeImg from "../../assets/images/headphone-Model.webp";
import greenImg from "../../assets/images/headphone-Model.webp";

const AudioCards = () => {
  const cardsData = [
    {
      image: beigeImg,
      text: "Deep lows.  Lush mids.\nAiry highs.  All perfectly\nin balance.",
    },
    {
      image: greenImg,
      text: "Deep lows.  Lush mids.\nAiry highs.  All perfectly\nin balance.",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] p-12">
      <div className="flex justify-center gap-8 flex-wrap">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col relative w-full max-w-[550px] min-h-[300px] rounded-lg p-8 bg-gradient-to-b from-[#D2CDC6] to-[#F8BF93] shadow-lg overflow-hidden justify-center items-start text-left"
          >
            <div className="relative z-10">
              <p className="text-[#52483E] text-lg font-medium leading-relaxed m-0 whitespace-pre-line">
                {card.text}
              </p>
            </div>

            <img
              src={card.image}
              alt="Headphone"
              className="absolute bottom-0 right-[-150px] w-full h-full object-cover z-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioCards;

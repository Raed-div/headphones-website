// src/components/AudioCards.jsx
import React from "react";
import beigeImg from "../../assets/images/headphone-Model.png";
import greenImg from "../../assets/images/headphone-Model.png";

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
    <div
      style={{
        background: "#F5F5F5",
        padding: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              maxWidth: "550px",
              minHeight: "300px",
              borderRadius: "1rem",
              padding: "2rem",
              background: "linear-gradient(to bottom, #D2CDC6, #F8BF93)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <div style={{ zIndex: 2 }}>
              <p
                style={{
                  color: "#52483E",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "1.5",
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {card.text}
              </p>
            </div>

            <img
              src={card.image}
              alt="Headphone"
              style={{
                position: "absolute",
                bottom: "0",
                right: "-150px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioCards;

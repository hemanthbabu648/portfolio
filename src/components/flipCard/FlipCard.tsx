import React from "react";
import "./flipCard.css";

type FlipCardProps = {
  frontContent: React.JSX.Element;
  backContent: React.JSX.Element;
};

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flipContainer">
      <div className="flipCard">
        {/* FrontCard Start */}
        <div className="frontSide">{frontContent}</div>
        {/* BackCard Start */}
        <div className="backSide">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;

import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="title">
      <h2>{text || "Default title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;

import React from "react";
import { toast } from "react-toastify";

interface ColorValue {
  hex: string;
  weight: number;
}

interface SingleColorProps {
  index: number;
  color: ColorValue;
}
const SingleColor: React.FC<SingleColorProps> = ({ index, color }) => {
  const { hex, weight } = color;
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;

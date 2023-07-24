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
  return <div>SingleColor</div>;
};
export default SingleColor;

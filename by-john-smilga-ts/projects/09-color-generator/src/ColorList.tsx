import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

interface ColorValue {
  hex: string;
  rgb: string;
}

interface ColorListProps {
  colors: ColorValue[];
}

const ColorList: React.FC<ColorListProps> = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;

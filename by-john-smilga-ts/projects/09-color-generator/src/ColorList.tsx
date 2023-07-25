import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList: React.FC<any> = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color: any, index: number) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;

import MenuItems from "./MenuItems";
import { MenuItem } from "./types.d";

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <MenuItems key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Menu;

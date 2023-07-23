import { useState } from "react";
import Title from "./Title";
import items from "./data";
import { MenuItem } from "./types.d";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

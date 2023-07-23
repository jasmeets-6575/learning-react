import { useState } from "react";
import Title from "./Title";
import items from "./data";
import { MenuItem } from "./types.d";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

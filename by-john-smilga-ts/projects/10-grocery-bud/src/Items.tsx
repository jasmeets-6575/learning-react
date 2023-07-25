import React from "react";
import SingleItem from "./SingleItem";

interface Item {
  id: number;
  name: string;
  completed: boolean;
}

interface ItemsProps {
  items: Item[];
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}

const Items: React.FC<ItemsProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;

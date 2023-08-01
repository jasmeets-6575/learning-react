import React from "react";
import SingleItem from "./SingleItem";

interface Item {
  id: string;
  title: string;
  isDone: boolean;
}

interface ItemsProps {
  items: Item[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;

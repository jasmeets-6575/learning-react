import React from "react";
import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";

interface Item {
  id: string;
  title: string;
  isDone: boolean;
}

interface ItemsProps {
  items: Item[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const { isLoading, isError } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem " }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem " }}>There was an error...</p>;
  }
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;

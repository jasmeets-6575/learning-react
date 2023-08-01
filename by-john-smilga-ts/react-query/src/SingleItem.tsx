import React from "react";

interface Item {
  id: string;
  title: string;
  isDone: boolean;
}

interface SingleItemProps {
  item: Item;
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => console.log("edit task")}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone ? "line-through" : "none", // Adjusted to set "line-through" when 'isDone' is true, otherwise "none"
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;

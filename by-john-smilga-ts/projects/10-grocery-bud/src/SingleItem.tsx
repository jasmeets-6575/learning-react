import React from "react";

interface Item {
  id: number;
  name: string;
  completed: boolean;
}

interface SingleItemProps {
  item: Item;
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({
  item,
  removeItem,
  editItem,
}) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;

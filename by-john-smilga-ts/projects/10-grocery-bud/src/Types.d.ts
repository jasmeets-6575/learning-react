export type ItemType = {
  name: string;
  completed: boolean;
  id: string;
};

export type FormType = {
  addItem: (itemName: string) => void;
};

export type ItemsProps = {
  items: ItemType[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

export type SingleItemProps = {
  item: ItemType;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

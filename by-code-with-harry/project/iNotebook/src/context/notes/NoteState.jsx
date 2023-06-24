import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "john",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;

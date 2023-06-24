import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes} = useContext(NoteContext);
  return (
    <div>
    <AddNote/>
    <div className="row my-3">
      <h2>Yours Note</h2>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />
      })} 
    </div>
    </div>
  );
};
export default Notes;

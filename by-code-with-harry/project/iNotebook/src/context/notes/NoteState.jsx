import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "649654fd204d7e33417841af4",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-06-24T02:29:17.400Z",
      __v: 0,
    },
    {
      _id: "64968af9acc93cfc8a7e62a73",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title 2",
      description: "Please up early",
      tag: "personal",
      date: "2023-06-24T06:19:37.753Z",
      __v: 0,
    },
    {
      _id: "649654fd204d7e33417841af2",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-06-24T02:29:17.400Z",
      __v: 0,
    },
    {
      _id: "64968af9acc93cfc8a7e62a71",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title 2",
      description: "Please up early",
      tag: "personal",
      date: "2023-06-24T06:19:37.753Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    const note = {
      _id: "64968af9acc93cfc8a7e62a71",
      user: "649640cdf2add0ff4c5b6878",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-24T06:19:37.753Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

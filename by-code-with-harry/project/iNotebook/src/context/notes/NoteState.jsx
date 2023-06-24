import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // get All Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorisation":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
    });
    const resJson = await response.json();
    setNotes(resJson);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "authorisation":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorisation":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
    });
    const resJson = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "authorisation":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const resJson = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
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
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorisation:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const resJson = response.json();
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
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorisation:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NjQwY2RmMmFkZDBmZjRjNWI2ODc4In0sImlhdCI6MTY4NzU3MDIwOH0._rbP_FvwwPN4eVRN1Ei5NQwlOH7J66pbthzhA6opMRQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const resJson = response.json();

    // Logic to edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

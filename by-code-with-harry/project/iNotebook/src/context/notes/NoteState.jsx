import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "649654fd204d7e33417841af",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-06-24T02:29:17.400Z",
      __v: 0,
    },
    {
      _id: "64968af9acc93cfc8a7e62a7",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title 2",
      description: "Please up early",
      tag: "personal",
      date: "2023-06-24T06:19:37.753Z",
      __v: 0,
    },
    {
      _id: "649654fd204d7e33417841af",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-06-24T02:29:17.400Z",
      __v: 0,
    },
    {
      _id: "64968af9acc93cfc8a7e62a7",
      user: "649640cdf2add0ff4c5b6878",
      title: "My title 2",
      description: "Please up early",
      tag: "personal",
      date: "2023-06-24T06:19:37.753Z",
      __v: 0,
    },
  ];
  const [notes,setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes,setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

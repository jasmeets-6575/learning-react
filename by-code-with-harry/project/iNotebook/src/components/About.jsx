import { useContext } from "react"
import NoteContext from "../context/notes/NoteContext"

const About = () => {
   const a = useContext(NoteContext)
  return (
    <div>About</div>
  )
}
export default About
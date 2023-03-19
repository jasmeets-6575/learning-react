import {people} from "../../data"

const LeverageExample = () => {
  return (
    <div>
        {people.map((person)=>{
            return <div key={person.name}>
                {person.name}
            </div>
        })}
    </div>
  )
}
export default LeverageExample
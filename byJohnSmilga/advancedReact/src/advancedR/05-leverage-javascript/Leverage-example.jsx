import {people} from "../../data"

const LeverageExample = () => {
  return (
    <div>
        {people.map((person)=>{
            const {name,nickName,image}=person
            const img = images?.[0]?.small?.url ?? avatar;
            return <div key={name}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <p>Nickname is {nickName || "shake and bake "}</p>
            </div>
        })}
    </div>
  )
}
export default LeverageExample
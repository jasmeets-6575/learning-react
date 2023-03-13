import {useState} from 'react'

const ShortCircuitExample = () => {
  const [text,setText] = useState('');
  const [name,setName] = useState('Susan');
  const [user,setUser] = useState({name:"john"});
  const [isEditing,setIsEditing] = useState(false);
    return (
        <div>
            <h2>{text || "default value" }</h2>
            {text && (
                <div>
                    <h2>whatever return</h2>
                    <h2>{name}</h2>
                </div>
            )}
            {/* {!text && (
                <div>
                    <h2>whatever return</h2>
                    <h2>{name}</h2>
                </div>
            )} */}
            {user && <SomeComponent name ={user.name} />}
        </div>
    )
}
const SomeComponent = ({name}) => {
    return <div>
    <h2>whatever return</h2>
    <h2>{name}</h2>
</div>
}

export default ShortCircuitExample

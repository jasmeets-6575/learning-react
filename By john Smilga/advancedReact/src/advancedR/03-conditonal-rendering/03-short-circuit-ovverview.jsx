import { useState } from "react";
const ShortCircuitOverview  = () => {
  const [text,setText] = useState('');
  const [name,setName] = useState('Susan')
  const codeExample = text || 'hello world'
  return (
    <div>
      <h2>Falsy OR :{text || 'hello world'}</h2>
      <h2>Falsy AND : {text && 'hello world'}</h2>
      <h2>Truthy OR : {name || 'hello world'}</h2>
      <h2>Truthy AND : {name && 'hello world'}</h2>
      {codeExample}
    </div>
  )
}

export default ShortCircuitOverview ;

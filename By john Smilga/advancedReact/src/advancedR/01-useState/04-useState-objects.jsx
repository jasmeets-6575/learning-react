import { useState } from 'react';

const UseStateObject = () => {
  const [name,setName] =useState('Peter')  
  const [age,setAge] =useState(24)  
  const [hobby,setHobby] =useState('Listeninig Music')  
  const displayPerson = () => {
    setName("John")
    setAge(28)
    setHobby("dance")
  }
  return ( <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>Enjoys to {hobby}</h3>
  <button type='btn' onClick={displayPerson}>Know about John</button>
    </>
  )
}

export default UseStateObject

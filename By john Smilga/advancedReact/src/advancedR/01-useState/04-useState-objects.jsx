import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]= useState({
    name:"peter",
    age:24,
    hobby:"read books"
  });  
  const displayPerson = () => {
//     setPerson({
//         name:"John",
//         age:28,
//         hobby:"dance "
//       });
setPerson({...person,name:"susan"});
};
const {name , age , hobby} = person;
  return ( <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>Enjoys to {hobby}</h3>
  <button type='btn' onClick={displayPerson}>Know about John</button>
    </>
  )
}

export default UseStateObject

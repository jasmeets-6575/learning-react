import { React,useState } from 'react'
import data from './data';
import List from './List'

function App() {
  const [value,setValue] = useState(data);
  const clickHandle = ()=> {
   setValue((currentvalue)=>{
    newValue += currentvalue + 1
    return newValue 
   }) 
  }
  return <main>
    <section className='container'>
      <h3>{value}</h3>
      <List people={people} />
      <button onClick={()=>setValue([])}> Clear All</button>
    </section>
  </main>
}

export default App;

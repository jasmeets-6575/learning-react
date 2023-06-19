import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState("");
  const [error,setError] = useState(false);
  const [list,setList] =useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  }

  return ( <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f1f5f8" />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      <h2>colors</h2>
    </section>
    </>
  )
}

export default App

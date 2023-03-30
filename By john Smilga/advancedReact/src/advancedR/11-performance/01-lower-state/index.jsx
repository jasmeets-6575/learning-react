import { useState } from 'react';
import { data } from '../../../data';
import Counter from './Counter';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
 
  return (
    <section>
      <Counter/>
      <List people={people} />
    </section>
  );
};
export default LowerState;

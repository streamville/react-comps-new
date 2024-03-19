import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';



function CounterPage({ initialCount }) {
  const [ count, setCount ] = useState(initialCount);
  const [ magicNumber, setMagicNumber ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  const addMagicNumber = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMagicNumber(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + magicNumber);
    setMagicNumber(0);
  }



  return (
    <Panel className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl">Counter</h1>
      <div className="flex space-x-4">
        <Button onClick={decrement}>-</Button>
        <span className="text-2xl">{count}</span>
        <Button onClick={increment}>+</Button>
      </div>

      <form onSubmit={handleSubmit} className='flex justify-center items-center'>
        <label className='text-xl'>Add magic numbers: </label>
        <input 
          onChange={addMagicNumber}
          value={magicNumber || ''}
          type="number" 
          className='p-1 m-3 bg-gray-100 rounded'
        /> 
        <Button type="submit" primary rounded>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;


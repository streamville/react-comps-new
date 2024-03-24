import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_MAGIC_NUMBER = 'setMagicNumber';
const DECREMENT_COUNT = 'decrement';
const ADD_MAGIC_NUMBER = 'addMagicNumber';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1
        };
    case SET_MAGIC_NUMBER:
      return {
        ...state,
      magicNumber: action.payload,
    };
    case ADD_MAGIC_NUMBER:
      return {
        ...state,
        count: state.count + state.magicNumber,
        magicNumber: 0
      };
    default:
      return state;
  
  }
}

function CounterPage({ initialCount }) {
  // const [ count, setCount ] = useState(initialCount);
  // const [ magicNumber, setMagicNumber ] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    magicNumber: 0
  });


  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  }


  const setMagicNumber = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: SET_MAGIC_NUMBER,
      payload: value
    })
  }
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: SET_MAGIC_NUMBER,
      payload: value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_MAGIC_NUMBER
    })
  }



  return (
    <Panel className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl">Counter</h1>
      <div className="flex space-x-4">
        <Button onClick={decrement}>-</Button>
        <span className="text-2xl">{state.count}</span>
        <Button onClick={increment}>+</Button>
      </div>

      <form onSubmit={handleSubmit} className='flex justify-center items-center'>
        <label className='text-xl'>Add magic numbers: </label>
        <input 
          onChange={handleChange}
          value={state.magicNumber || ''}
          type="number" 
          className='p-1 m-3 bg-gray-100 rounded'
        /> 
        <Button type="submit" primary rounded>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;


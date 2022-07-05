
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { CounterDispatcher } from './Store/actionDispatcher'

function App() {

  var counter = useSelector((state) => state);
  var dispatch = useDispatch();
  const counterdispatcher = new CounterDispatcher();

  return (
    <div className='main-component'>
      <h2>You Have Walked {counter} steps Today!</h2>
      <button className='addSteps' onClick={() => { dispatch(counterdispatcher.addCounter()) }}>Add a Step</button>
      <button className='resetSteps' onClick={() => { dispatch(counterdispatcher.resetCounter()) }}>Reset Steps</button>
    </div>
  );
}

export default App;

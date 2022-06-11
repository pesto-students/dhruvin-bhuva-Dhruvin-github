
import './App.css';
import {useSelector,useDispatch} from 'react-redux'

function App() {

  const isLightOn = useSelector((state) => state)

  const dispatch = useDispatch();

  const lightedness = isLightOn ? "lit" : "dark";

 

  return (
    <>
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={() => dispatch({ type: 'Toggle' })}>flip</button>
      </div>
    </>
  )

}

export default App;

import './App.css'
import React, { useState } from "react";
import  Button from './Components/Button/index';

function App() {
  const [colors, setColors] = useState();

  return (
    <>
      <button
        className={'green m-4'}
        onClick={() => setColors((colors) => (colors = "bg-success"))}
      >
        Button green
      </button>
      <button
        className='red m-4'
        onClick={() => setColors((colors) => (colors = "bg-danger"))}
      >
        Button Red
      </button>
      <button
        className='yellow m-4'
        onClick={() => setColors((colors) => (colors = "bg-warning"))}
      >
        Button Yellow
        
      </button>

      <div className= {`circle ${colors} d-flex align-items-center text-center m-4`} >Semaforo</div>

    </>
  )}

  export default App
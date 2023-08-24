import logo from './logo.svg';
import { useState, useEffect } from 'react';
// import Axios from "axios";
import './App.css';
import dice from './images/icon-dice.svg';
import divider from './images/pattern-divider-desktop.svg';



function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const slipData = data;
      console.log(slipData);
      console.log(slipData.slip.advice);
      setAdvice(slipData.slip.advice);
      console.log(advice);
      setAdviceId(slipData.slip.id);
      // adviceText.innerText = advice;
    });
  });
  return (
    <div className="content-container">
      <div className='ContentCard p-10 ml-auto mr-auto rounded-xl'>
      <div className="CardHeader text-center mb-10">
        <p id='adviceId' className='mb-4 font-medium'>ADVICE &nbsp;#{adviceId}</p>
        <p id='adviceText' className='text-3xl mt-4 font-semibold'>"{advice}"</p>
        {/* <hr className='mt-11'/> */}
        <img src={divider} alt="divider" className='mt-10'/>
      </div>
    </div>
      <div className="AdviceGeneratorBtn text-center">
        {/* <button onClick={() => {setAdviceId();setAdvice();}}>Generate Advice</button> */}
        <button className='rounded-full p-6' id='diceBtn'><img src={dice} alt="dice" onClick={() => {setAdviceId();setAdvice();}}/></button>
      </div>
    </div>
  );
}

export default App;

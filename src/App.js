import './App.css';
import Counter from "./components/Counter";
import Result from "./components/Result";
import React, {useState} from "react";
import Navigate from "./components/navigate";

function App({value}) {
    const [result, setResult]=useState(0)
    console.log(value,'data')
    const [lira, setLira] =useState()
    const setText=(e)=>{
        let Lira=e.target.value
        setLira(Lira)
    }

    return (

    <div className="App">

      <Counter lira={lira} setLira={setLira} setText={setText} setResult={setResult} />
        <Result result={result}/>



    </div>
  );
}

export default App;

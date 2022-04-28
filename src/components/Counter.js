import React, {useState} from 'react';
import Button from "./Button";

const Counter = ({ setResult, setText, lira}) => {


    return (
        <div className='app-container'>
            <div className=" input-group mb-3 input-lira ">
                <span className="input-group-text" id="inputGroup-sizing-default">L</span>
                <input type="number" placeholder='0'  onChange={(e)=>{setText(e)}} className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div>
                <Button lira={lira}  setResult={setResult}

                />
            </div>
        </div>

    );
};

export default Counter;
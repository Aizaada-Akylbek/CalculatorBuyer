import React, {useState} from 'react';
import Navigate from "./navigate";

const Result = ({result}) => {

    return (
        <div>
        <div className='result-wrap'>
            <div>
                Итого к оплате
            </div>
            <div>
                Сумма
                <span> {result}</span>
            </div>

        </div>
            <Navigate/>
        </div>
    );
};

export default Result;
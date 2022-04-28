import React, {useState} from 'react';
import {useNavigate} from "react-router";

const Navigate = () => {

    const [name, setName]=useState()
    const navigate=useNavigate()
    const [isShow, setIsShow]=useState(false)


    const myPage=()=>{
        console.log(name)
        if (name==='ice123') {
            navigate('ice')
        } else {
            setIsShow(true)

        }
    }

const element=(
    <div style={{marginTop: 30}}>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Как вас зовут?)</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder=' Ваше имя' type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div className='group-button flex'>

            <button onClick={myPage} type='button' className='btn btn '>Ок</button>
        </div>
    </div>
)


    return !isShow ? element : null
};

export default Navigate;
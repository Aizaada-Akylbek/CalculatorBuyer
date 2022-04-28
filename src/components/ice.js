import React, {useState} from 'react';
import App from "../App";

const Ice = ({setSom}) => {
    const [somLocal, setSomLocal] = useState()
    const [ruLocal, setRuLocal] = useState()
    const [tengeLocal, setTengeLocal] = useState()
    const [liraLocal, setLiraLocal] = useState()

    console.log(somLocal)

    const handleFormSubmit = (e) => {
        // e.preventDefault()

        localStorage.setItem('som', somLocal )
        localStorage.setItem('ru', ruLocal )
        localStorage.setItem('tenge', tengeLocal )
        localStorage.setItem('lira', liraLocal )
        setSomLocal('')
        setRuLocal('')
        setTengeLocal('')
        setLiraLocal('')

        alert('Успешно сохранено')
    }


    return (
        <>
            <div>
                <App/>
                <div className="input-group mb-3 input-currency" style={{marginTop: 20}}>
                    <span className="input-group-text" id="inputGroup-sizing-default"> Сом    к $</span>
                    <input value={somLocal} onChange={(e)=>setSomLocal(e.target.value)} type="number" placeholder='0' className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 input-currency" style={{marginTop: 20}}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Рубль к $</span>
                    <input value={ruLocal} onChange={(e)=>setRuLocal(e.target.value)} type="number" placeholder='0' className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 input-currency" style={{marginTop: 20}}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Тенге к $</span>
                    <input value={tengeLocal} onChange={(e)=>setTengeLocal(e.target.value)} type="number" placeholder='0' className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 input-currency" style={{marginTop: 20}}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Лира к $</span>
                    <input value={liraLocal} onChange={(e)=>setLiraLocal(e.target.value)} type="number" placeholder='0' className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <button disabled={!somLocal || !ruLocal || !tengeLocal || !liraLocal} onClick={handleFormSubmit} type="submit" className="btn btn-send">Отправить</button>
            </div>
        </>

    );
};

export default Ice;
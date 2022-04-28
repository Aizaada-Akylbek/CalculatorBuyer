import React, {useEffect, useState} from 'react';

const Button = ({lira, setResult}) => {
    console.log(lira, 'input')
    const [somLocal, setSomLocal] = useState()
    const [ruLocal, setRuLocal] = useState()
    const [tengeLocal, setTengeLocal] = useState()
    const [liraLocal, setLiraLocal] = useState()

    useEffect(() => {
        getCurrency()

    }, [liraLocal])
    const getCurrency = () => {
        const getSom = localStorage.getItem('som')
        const getRu = localStorage.getItem('ru')
        const getTenge = localStorage.getItem('tenge')
        const getLira = localStorage.getItem('lira')
        setSomLocal(getSom)
        setRuLocal(getRu)
        setTengeLocal(getTenge)
        setLiraLocal(getLira)
        console.log(somLocal, ruLocal, tengeLocal, liraLocal, 'aaaa')

    }
    const calculateSom = (e) => {

        if (lira) {
            console.log(e)
            let totalSom = ((somLocal / liraLocal) * 21 / 100) + (somLocal / liraLocal)
            // let total=((88 / 14)*21/100)+(88/14)
            let result = lira * totalSom.toFixed(2) + 390 + 250
            let itogo = result.toFixed(2)
            setResult(itogo + e)
            console.log(totalSom)

        }
        return
    }
    const calculateRu = (e) => {
        if (lira) {
            let totalRu = ((ruLocal / liraLocal) * 21 / 100) + (ruLocal / liraLocal)
            let resultRu = lira * totalRu.toFixed(2) + 390 + 250
            let itogo = resultRu.toFixed(2)
            setResult(itogo + ' рублей')
        }
        return

    }
    const calculateTenge = (e) => {
        if (lira) {
            let totalTenge = ((tengeLocal / liraLocal) * 21 / 100) + (tengeLocal / liraLocal)
            let resultTenge = lira * totalTenge.toFixed(2) + 390 + 250
            let itogo = resultTenge.toFixed(2)
            setResult(itogo + e)
            console.log(resultTenge)
        }
        return

    }
    return (

        <div className='group-button'>
            {/*<img src={turkishLira}/>*/}
            <button onClick={(e) => calculateSom(e.target.textContent)} type="button" className="btn btn"> Cом</button>
            <button onClick={(e) => calculateRu(e.target.textContent)} type="button" className="btn btn"> Рубль</button>
            <button onClick={(e) => calculateTenge(e.target.textContent)} type="button" className="btn btn"> Тенге
            </button>

        </div>
    );
};

export default Button;
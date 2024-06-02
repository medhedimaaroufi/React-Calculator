import './Calculator.css'
import Afficheur from './Afficheur';
import Button from './Button';
import { useState } from 'react';

function Calculator() {

    const states=[useState(0),useState(''),useState(''),useState('')]
    return(
        <div className="Box container">
            <Afficheur text={String(states[0][0])}></Afficheur>
            <div className='container' >
                <Button width={2} value='AC' states={states} />
                <Button width={1} value='DEL' states={states} />
                <Button width={1} value='/' states={states} />
            </div>
            <div className='container' >
                <Button width={1} value='1' states={states} />
                <Button width={1} value='2' states={states} />
                <Button width={1} value='3' states={states} />
                <Button width={1} value='*' states={states} />
            </div>
            <div className='container' >
                <Button width={1} value='4' states={states} />
                <Button width={1} value='5' states={states} />
                <Button width={1} value='6' states={states} />
                <Button width={1} value='+' states={states} />
            </div>
            <div className='container' >
                <Button width={1} value='7' states={states} />
                <Button width={1} value='8' states={states} />
                <Button width={1} value='9' states={states} />
                <Button width={1} value='-' states={states} />
            </div>
            <div className='container' >
                <Button width={1} value='.' states={states} />
                <Button width={2} value='0' states={states} />
                <Button width={1} value='=' states={states} />
            </div>
        </div>
    );
}

export default Calculator;

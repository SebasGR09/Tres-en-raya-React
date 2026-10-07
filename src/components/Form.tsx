import { useState } from "react";
import Board from "./Board";

export default function Form(){
    const [firstPlayer, firstPlayerSet] = useState('');
    const [secondPlayer, secondPlayerSet] = useState('');
    const [show, showSet] = useState(false);
    const [showBtn, showBtnSet] = useState(true);

    



    function showBoard(){
        showSet(true);
        showBtnSet(false);
    }


    return <>
        {showBtn && <form action="">
            <label htmlFor="">Primer jugador: </label>
             <input 
                type="text" 
                value={firstPlayer} 
                onChange={(Event: React.ChangeEvent<HTMLInputElement>)=>{firstPlayerSet(Event?.target.value)}} 
                disabled={show}
                />
            <label htmlFor="">Segundo jugador: </label>
            <input type="text" value={secondPlayer} onChange={(Event: React.ChangeEvent<HTMLInputElement>)=>{secondPlayerSet(Event.target.value)}} disabled={show}/>
        </form>}
        
        {showBtn && <button onClick={showBoard}>Guardar data</button>}
        {show ?  <Board firstPlayerSelect={firstPlayer} secondPlayerSelect={secondPlayer}/> : null}
    </>
}
import { useState } from "react";
import Square from "./Square";
import WinCondition from "../functions/WinCondition";
import Message from "./Message";

// Aqui definimos el board del tres en raya
export default function Board({firstPlayerSelect, secondPlayerSelect}: {firstPlayerSelect:string, secondPlayerSelect:string}){
    // Se crea un array el cual se encarga de ponerle valores a los botones
    const [cuadricula, cuadriculaSet] = useState(Array(9).fill(null));
    const [isXNext, isXNextSet] = useState(true);

    const [currentPlayer, currentPlayerSet] = useState(firstPlayerSelect);
    

    // Funcion la cual actualiza cada cuadricula presionada y la guarda para mostrarla como valor en el boton
    function changeState(index: number): void {
        const winner = WinCondition(cuadricula, firstPlayerSelect, secondPlayerSelect);

        if(cuadricula[index] || winner != null){      // Si existe un valor en el array no lo modifique
            return;
        }

        const arrayVacio = cuadricula.slice();  // Se realiza una copia en base del primer array para actualizar el arreglo original y mostrar valores en los botones
        arrayVacio[index] = isXNext ? 'X' : 'O';    // Damos turnos
        cuadriculaSet(arrayVacio);
        
        isXNextSet(!isXNext);
        currentPlayerSet(isXNext ? secondPlayerSelect: firstPlayerSelect);
        
        if(arrayVacio.filter((value) => value != null).length == 9 && WinCondition(arrayVacio, firstPlayerSelect, secondPlayerSelect) === null){
            currentPlayerSet("Empate");
            return;
        }
    }

    function reset(){
        cuadriculaSet(Array(9).fill(null));
        currentPlayerSet(firstPlayerSelect);
        isXNextSet(true);
    }



    // Aqui se define cada fila con sus respectivos botones y sus valores con su evento onClick
    return (
        <>
            { currentPlayer != "Empate" ? <h1>Jugador actual: {currentPlayer}</h1>: <h1>{currentPlayer}</h1> }
            <div className="board-row">
                <Square value={cuadricula[0]} handler={() => changeState(0)}/>
                <Square value={cuadricula[1]} handler={() => changeState(1)} />
                <Square value={cuadricula[2]} handler={() => changeState(2)} />
            </div>
            <div className="board-row">
                <Square value={cuadricula[3]} handler={() => changeState(3)}/>
                <Square value={cuadricula[4]} handler={() => changeState(4)}/>
                <Square value={cuadricula[5]} handler={() => changeState(5)}/>
            </div>
            <div className="board-row">
                <Square value={cuadricula[6]} handler={() => changeState(6)}/>
                <Square value={cuadricula[7]} handler={() => changeState(7)}/>
                <Square value={cuadricula[8]} handler={() => changeState(8)}/>
            </div>

            {WinCondition(cuadricula, firstPlayerSelect, secondPlayerSelect) != null ? <Message value={WinCondition(cuadricula, firstPlayerSelect, secondPlayerSelect)!}/> : <h1></h1>}
            <button onClick={reset} className="btnReset">Reiniciar</button>
        </>
    )
}
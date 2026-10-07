function WinCondition(cuadricula: string[], player1:string, player2:string){
    let winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];

    for(let i = 0; i < winLines.length; i++){
        const [a, b, c] = winLines[i];
        if(cuadricula[a] && cuadricula[a] == cuadricula[b] && cuadricula[a] == cuadricula[c]){
            return cuadricula[a] === "X" ? player1: player2;
        }
    }
    return null;
}


export default WinCondition;
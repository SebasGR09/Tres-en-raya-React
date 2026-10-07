// En ts se ponen primero las props y luego sus tipos de datos y lo que retornan
export default function Square({value, handler}: {value: string, handler: () => void}) {
    return <>
        {/* SE CREA EL COMPONENTE BOTON EL CUAL OBTIENE UN EVENTO Y VALOR DESDE LAS PROPS DEL BOARD */}
        <button className={value === 'X' ? "square btnX": "square btnO"}  onClick={handler}>{value}</button>
    </>
    
}
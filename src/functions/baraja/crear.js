import _ from 'underscore';

let vlArrTiposCarta = ['C', 'D', 'H', 'S'];
let vlArrCartasLetras = ['A', 'J', 'Q', 'K'];

/*
Significado de las cartas

2C = Two of clubs (2 de trebol)
2D = Two of diamonds (2 de diamante)
2H = Two of hearts (2 de corazones)
2S = Two of spades (2 de espadas)
*/

/**
 * 
 * @returns {Array<string>} Devuelve una baraja de cartas
 */
export const fnCrearBaraja = () => {
    let vtArrBaraja = [];  
    
    for (let vtNroPuntero = 2; vtNroPuntero < 11; vtNroPuntero++){
        for (let vtStrTipoCarta of vlArrTiposCarta){
            vtArrBaraja.push(vtNroPuntero + vtStrTipoCarta);
        }
    }

    for (let vtStrCartaLetra of vlArrCartasLetras){
        for (let vtStrTipoCarta of vlArrTiposCarta){
            vtArrBaraja.push(vtStrCartaLetra + vtStrTipoCarta);
        }
    }

    vtArrBaraja = _.shuffle( vtArrBaraja ); //baraja las cartas    

    return vtArrBaraja;
}

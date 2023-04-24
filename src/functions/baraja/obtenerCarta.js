/**
 * Saca una carta de la baraja
 * @param {Array<string>} pArrBaraja 
 * @returns {string} retorna el dato de una carta
 */
export const fnStrObtenerCarta = (pArrBaraja = []) => {
    if (pArrBaraja.length === 0) {
        throw 'No hay cartas disponibles';
    }

    let vtStrCartaAsignada = pArrBaraja.pop();

    return vtStrCartaAsignada;
}

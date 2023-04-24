/**
 * Devuelve la representación en numero de una carta
 * @param {string} pStrCarta 
 * @returns {number}
 */
export const fnNroValorCarta = (pStrCarta) => {
    let vtNroValorCarta = 0;
    let vtStrCarta = pStrCarta.substring(0, pStrCarta.length-1);

    if (isNaN(vtStrCarta)) {
        vtNroValorCarta = (vtStrCarta === 'A') ? 1 : 10;
    }
    else {
        vtNroValorCarta = vtStrCarta * 1;
    }

    return vtNroValorCarta;
}

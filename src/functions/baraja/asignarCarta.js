import { fnStrObtenerCarta } from './obtenerCarta.js';
import { fnNroValorCarta } from '../general/varios.js';

/**
 * Asigna carta y devuelve los puntos acumulados
 * @param {Boolean} pBoHumano True = Cuando es turno de Humana; False = turno de computadora
 * @param {HTMLElement} pSmlPtoJugador Objeto que presenta los puntos
 * @param {HTMLElement} pDivCartasJugador Objeto que contiene todas las cartas del jugador
 * @param {Array<String>} pArrBaraja Baraja de cartas
 * @returns {number}
 */
export const fnNroAsignarCartaJugador = (pBoHumano = true, pSmlPtoJugador, pDivCartasJugador, pArrBaraja = []) => {

    if ( !pSmlPtoJugador) throw new Error('El parametro HTML pSmlPtoJugador es necesario');
    if ( !pDivCartasJugador) throw new Error('El parametro HTML pDivCartasJugador es necesario');
    if ( pArrBaraja.length === 0) throw new Error('El parametro arreglo pArrBaraja debe tener elementos');

    //asigna cartas a jugador 
    let vtStrCartaAsiganada = fnStrObtenerCarta(pArrBaraja);

    //obtiene los ptos que actualmente tiene y acumula
    let vtNroValorCarta = pSmlPtoJugador.textContent * 1; //( (pBoHumano) ? clSmlPtoJugador.textContent : clSmlPtoCompu.textContent ) * 1;
    vtNroValorCarta = vtNroValorCarta + fnNroValorCarta(vtStrCartaAsiganada);

    //crea la carta a presentar en pantalla
    let vtImgNueva = document.createElement('img');
    vtImgNueva.src = `assets/cartas/${ vtStrCartaAsiganada}.png`;
    vtImgNueva.classList.add('carta');

    pSmlPtoJugador.textContent = vtNroValorCarta;
    pDivCartasJugador.append(vtImgNueva);

    return vtNroValorCarta
}

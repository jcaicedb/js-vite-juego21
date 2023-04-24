import _ from 'underscore'; //el caracter "_" indica que queremos todos los modulos del paquete

import { fnCrearBaraja, fnNroAsignarCartaJugador} from './baraja'

( () => {
  'use strict'

  console.log('empezando...');

  let vlArrBaraja = [];

  const clNroMaximoPtos = 21;

  //referencia a objetos HTML
  const clBtnNuevo = document.querySelector('#btnNuevo');
  const clBtnPedir = document.querySelector('#btnPedir');
  const clBtnDetener = document.querySelector('#btnDetener');
  const clSmlPtoJugador = document.querySelector('#smlPtosJugador');
  const clSmlPtoCompu = document.querySelector('#smPtosComputador');
  const ClDivCartasJugador = document.querySelector('#jugador-cartas');
  const ClDivCartasCompu = document.querySelector('#computadora-cartas');
  const clDivGanador = document.querySelector('#divGanador');

  const fnPresentaGanador = (pStrGanador) => {
      //presenta al ganador
      let vtH2Mensaje = document.createElement('h2');
      vtH2Mensaje.id = 'h2Ganador';
      vtH2Mensaje.style.textAlign = 'center';
      
      vtH2Mensaje.innerText = ( (pStrGanador === 'Empate' ) ? 'Hay un empate...' : `Gana el ${pStrGanador} ...`);

      clDivGanador.classList.add('p-1');
      clDivGanador.classList.add('mx-5');
      clDivGanador.classList.add('my-2');
      clDivGanador.append(vtH2Mensaje);
      clDivGanador.style.visibility = 'visible';
  }

  const fnTomarCartasCompu = () => {
      let vtNroPtosHumano = clSmlPtoJugador.textContent * 1;
      let vtNroPtosCompu = 0;

      if (vtNroPtosHumano > clNroMaximoPtos) {vtNroPtosHumano = 0};

      do {
          vtNroPtosCompu = fnNroAsignarCartaJugador(false, clSmlPtoCompu, ClDivCartasCompu,vlArrBaraja);
      }
      while (vtNroPtosCompu <= vtNroPtosHumano && vtNroPtosCompu <= clNroMaximoPtos);

      setTimeout( () => {
        if (vtNroPtosCompu > clNroMaximoPtos) {
            fnPresentaGanador('Humano');
            console.log('gana humano', vtNroPtosCompu, vtNroPtosHumano);
        } else if (vtNroPtosCompu > vtNroPtosHumano) {   
            fnPresentaGanador('Computador');            
            console.log('gana compu', vtNroPtosCompu, vtNroPtosHumano);
        } else {   
            fnPresentaGanador('Empate');            
            console.log('empate', vtNroPtosCompu, vtNroPtosHumano);
        }  
      }, 100);
  }

  const fnDetener = () => {
      clBtnPedir.disabled = true;  
      clBtnDetener.disabled = true;
      fnTomarCartasCompu();
  }

  const fnInicioJuego = () => {
      vlArrBaraja = fnCrearBaraja();
  }

  fnInicioJuego();

  clBtnNuevo.addEventListener('click', () => {
      fnInicioJuego();

      clBtnPedir.disabled = false;  
      clBtnDetener.disabled = false;

      clDivGanador.innerHTML = '';    
      clDivGanador.style.visibility = 'hidden';

      clSmlPtoJugador.textContent = '0';
      clSmlPtoCompu.textContent = '0';

      for (let vtObjImg of document.querySelectorAll('img')) { vtObjImg.remove('img'); }
      
  });

  clBtnPedir.addEventListener('click', () => {
      let vtNroPtosHumano = fnNroAsignarCartaJugador(true, clSmlPtoJugador, ClDivCartasJugador, vlArrBaraja);

      if (vtNroPtosHumano > clNroMaximoPtos) { fnDetener(); }
  });


  clBtnDetener.addEventListener('click', () => {
      fnDetener();
  })

})();

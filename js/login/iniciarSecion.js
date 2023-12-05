const iniciarSecion = ()=>{
    const btnIniciarSecion = document.querySelector('[data-btnIniciarSecion]');

    btnIniciarSecion.addEventListener('click',(e)=>{
        e.preventDefault();
        const cajaIniciarSecion = document.querySelector('[data-cajaInicioSecion]');
        const contenedorInicio = document.querySelector('[data-contenedorInicio]');

        if (cajaIniciarSecion.style.display != 'flex') {
            cajaIniciarSecion.style.display = 'flex';
            contenedorInicio.classList.toggle('activeLog');
            btnIniciarSecion.style.display = 'none';
          }
    });
};

export default iniciarSecion;
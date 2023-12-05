const cerrarVentanaLogin = ()=>{
    const closeIcon = document.querySelector('[data-iconoCerrar]');
    const btnIniciarSecion = document.querySelector('[data-btnIniciarSecion]');
    const contenedorInicio = document.querySelector('[data-contenedorInicio]');

    closeIcon.addEventListener('click',(e)=>{
        e.preventDefault();
        const cajaIniciarSecion = document.querySelector('[data-cajaInicioSecion]');
        cajaIniciarSecion.style.display = 'none';
        btnIniciarSecion.style.display = 'block';
        contenedorInicio.classList.toggle('activeLog');

    });
};

export default cerrarVentanaLogin;
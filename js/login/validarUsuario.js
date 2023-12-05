const validarUsuario = (listaUsuarios)=>{
    const formularioLogin = document.querySelector('[data-formularioLogin]');
    const spanError = document.getElementsByClassName('inicioSecion__password--error')[0];
    const inputPassword = document.querySelector('[data-inputPassword]')

    formularioLogin.addEventListener('submit',(e)=>{
        e.preventDefault();
        const valorUsuario = e.target.querySelector('[data-usuarioLogin]').value;
        const valorPassword = e.target.querySelector('[data-inputPassword]').value;

        const acceso = listaUsuarios.find((datosUsuario) => {
            return datosUsuario.usuario === valorUsuario && datosUsuario.password === valorPassword;
        });

        if(acceso){
            spanError.classList.add('passwordError');
            window.location.href = '/assets/pages/home/home.html';
        }else{
            spanError.classList.add('inicioSecion__password--error');
            spanError.classList.remove('passwordError');
            inputPassword.classList.add('passwordError--input')
        }
    });
};

export default validarUsuario;
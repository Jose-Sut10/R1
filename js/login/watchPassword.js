const watchPassword = () => {
    const iconoOjo = document.querySelector('[data-iconoOjo]');
    const inputPassword = document.querySelector('[data-inputPassword]');

    iconoOjo.addEventListener('click', () => {
        if (inputPassword.type === 'password') {
            inputPassword.setAttribute('type', 'text');
            iconoOjo.classList.remove('fa-eye-slash');
            iconoOjo.classList.add('fa-eye');
        } else {
            inputPassword.setAttribute('type', 'password');
            iconoOjo.classList.remove('fa-eye');
            iconoOjo.classList.add('fa-eye-slash');
        }
    });
};

export default watchPassword;

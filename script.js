const validForm = () => {
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if(email.value == "") {
        emailError.innerHTML = 'Please enter your email';
        emailError.style = 'color: red';
        return false;
    } else {
        emailError.innerHTML = '';
    }
};
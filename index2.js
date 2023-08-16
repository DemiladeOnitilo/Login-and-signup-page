const form = document.getElementById('form');
const userName = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue.length == 0) {
        setErrorFor(userName, 'Username cannot be blank');
    } else {
        setSuccessFor(userName);
    }

    if(passwordValue.length == 0) {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function passwordVisibility1(){
    const password = document.getElementById('password');
    const eye = document.getElementById('hide1');
    const eyeSlash = document.getElementById('hide2');
    if(password.type === 'password'){
        password.type = 'text';
        eye.style.visibility = 'visible';
        eyeSlash.style.visibility = 'hidden';
    } else {
        password.type = 'password';
        eye.style.visibility = 'hidden';
        eyeSlash.style.visibility = 'visible';
    }
}

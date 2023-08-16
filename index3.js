const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    currentInputs();
})

function currentInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    
    if(usernameValue.length == 0){
        setErrorFor(username, 'Username Cannot be Blank');
    } else if(usernameValue.length > 0 && usernameValue.length < 9){
        setErrorFor(username, 'Username Must be atleast 9 characters');
    } else {
        setSuccessFor(username);
    }

    if(emailValue.length == 0){
        setErrorFor(email, 'Email cannot be Blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is invalid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue.length == 0){
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(confirmPasswordValue.length == 0){
        setErrorFor(confirmPassword, 'Password cannot be blank');
    } else if(confirmPasswordValue !== passwordValue){
        setErrorFor(confirmPassword, 'Password must be the same'); 
    } else {
        setSuccessFor(confirmPassword)
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'; 
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';   
}
function isEmail(email){
   return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
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
function passwordVisibility2(){
    const confirmPassword = document.getElementById('confirmPassword');
    const eye = document.getElementById('hide3');
    const eyeSlash = document.getElementById('hide4');
    if(confirmPassword.type === 'password'){
        confirmPassword.type = 'text';
        eye.style.visibility = 'visible';
        eyeSlash.style.visibility = 'hidden';
    } else {
        confirmPassword.type = 'password';
        eye.style.visibility = 'hidden';
        eyeSlash.style.visibility = 'visible';
    }
}
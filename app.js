const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordAg = document.querySelector('#password-ag');

//when button is clicked for submiting
form.addEventListener('submit', e =>{
     e.preventDefault(); // prevents submition of form
     validateInput();
})

//turns on error for feild 
const setError = (element, message) => {
     const inputContainer = element.parentElement; // selects the parent div
     const error = inputContainer.querySelector('.error');

     error.textContent = message;
     inputContainer.classList.add('error'); // classList property can be used to add or remove classes an HTML element 
     inputContainer.classList.remove('success');
}

const setSuccess = (element) =>{
     const inputContainer = element.parentElement;
     const errorDisplay = inputContainer.querySelector('.error')
     
     inputContainer.classList.add('success');
     inputContainer.classList.remove('error');
     errorDisplay.textContent = '';
}


const isEmailValid = (email) => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return (re.test(String(email).toLowerCase()));
}   


function validateInput(){
     const usernameVal = username.value.trim(); // trim() removes whitespaces in string
     const emailVal = email.value.trim();
     const passwordVal = password.value.trim();
     const passwordAgVal = passwordAg.value.trim();

     //validate username
     if(usernameVal === ""){ setError(username,"Enter a username")}
     else{ setSuccess(username)}

     //validate email
     if(emailVal === ""){ setError(email,"Enter a email")}
     else if(!isEmailValid(emailVal)){
          setError(email,'Enter Vaild Email');
     }
     else{ setSuccess(email)}

     // validate password
     if(passwordVal === ''){setError(password,'Enter a password')}
     else if(passwordVal.length < 8){setError(password,'Password must be atleast 8 characters')}
     else(setSuccess(password))

     // validate password-Ag
     if(passwordAgVal === ''){setError(passwordAg,'Re-enter password')}
     else if(passwordAgVal !== passwordVal){setError(passwordAg,'Passwords do not match')}
     else{setSuccess(passwordAg)}

}

 
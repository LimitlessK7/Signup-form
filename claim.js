const fError = document.querySelector('.fError');
const lError = document.querySelector('.lError');
const mailError = document.querySelector('.mailError');
const passError = document.querySelector('.passError');
const button = document.querySelector('button');
const changeStyle = document.querySelector('.changeStyle');

function claimTrial(){
    if(firstName.value == ''){
        fError.innerHTML = 'First Name cannot be empty';
        // changeStyle.style.borderColor ='hsl(354, 100%, 66%)';
    }else{fError.innerHTML = '';}

    if(lastName.value == ''){
        lError.innerHTML = 'Last Name cannot be empty';
        // changeStyle.style.borderColor ='hsl(354, 100%, 66%)';
    }else{lError.innerHTML = '';}

    if(password.value == ''){
        passError.innerHTML = 'Password cannot be empty';
        // changeStyle.style.borderColor ='hsl(354, 100%, 66%)';
    }else{passError.innerHTML = '';}
}

function ValidateEmail(){
     var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
     if (mail.value.match(mailFormat)){
        mailError.innerHTML = '';
         return (true)
    } else{
        mailError.innerHTML = 'Looks like this is not an Email';
        // changeStyle.style.borderColor ='hsl(354, 100%, 66%)';
         return (false)
    }
    
}

button.addEventListener('click', () => {
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const mail = document.querySelector('#mail');
    const password = document.querySelector('#password');
    claimTrial();
    ValidateEmail();
})

const helpButton = document.getElementById("help-button");
const helpContainer = document.querySelector(".help-press");
const buttonHelp = document.querySelector(".help-wrapper");
const buttonMini = document.querySelector(".mini");
const toggleSign = document.getElementById("togglesign");
const toggleSign2 = document.getElementById("togglesign2");
const SignIn = document.querySelector(".form-container2"); /* sign in */
const SignUp = document.querySelector(".form-container"); /*sign up */



helpButton.addEventListener('click', () =>{
    helpContainer.classList.add('help-press-show');
    buttonHelp.classList.add('help-wrapper-none');
});

buttonMini.addEventListener('click', () =>{
    helpContainer.classList.remove('help-press-show');
    buttonHelp.classList.remove('help-wrapper-none');
});


toggleSign.addEventListener('click', () => {
    SignIn.classList.add('formshow');
    SignUp.classList.add('formhide');
   
});
toggleSign2.addEventListener('click', () =>{
    SignIn.classList.remove('formshow');
    SignUp.classList.remove('formhide');
})



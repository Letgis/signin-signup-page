const container = document.querySelector(".container");
const btnPrincipalSignUp = document.querySelector(".button-signup");
const btnPrincipalSignIn = document.querySelector(".button-signin");
const signUpBtn = document.querySelector(".green-bg .button-signup");
const signInBtn = document.querySelector(".green-bg .button-signin");
const signInForm = document.querySelector(".signin-form");

signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change-sign-up");
    container.classList.remove("change-sign-in");
    btnPrincipalSignUp.classList.remove("change-sign-up-btn");
    btnPrincipalSignIn.classList.remove("change-sign-in-btn")
    signInForm.classList.remove("change-sign-in-form");
});

signInBtn.addEventListener("click", () => {
    container.classList.toggle("change-sign-in");
    container.classList.remove("change-sign-up");
    btnPrincipalSignUp.classList.toggle("change-sign-up-btn");
    btnPrincipalSignIn.classList.toggle("change-sign-in-btn");
    signInForm.classList.toggle("change-sign-in-form");
});


document.addEventListener('DOMContentLoaded', () => {
    const signinBtn = document.getElementById('signinBtn');
    const signupBtn = document.getElementById('signupBtn');
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    const passwordField = document.getElementById('passwordField');
    const formTitle = document.getElementById('title');

    const showSignup = () => {
        nameField.classList.remove('hidden');
        emailField.classList.remove('hidden');
        passwordField.classList.remove('hidden');
        formTitle.textContent = 'Sign-Up';
        signinBtn.style.display = 'inline-block';
        signupBtn.style.display = 'none';
    };

    const showSignin = () => {
        nameField.classList.add('hidden');
        emailField.classList.remove('hidden');
        passwordField.classList.remove('hidden');
        formTitle.textContent = 'Sign-In';
        signinBtn.style.display = 'none';
        signupBtn.style.display = 'inline-block';
    };

    signinBtn.addEventListener('click', () => {
        showSignin();
    });

    signupBtn.addEventListener('click', () => {
        showSignup();
    });

    showSignup();
});

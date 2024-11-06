// Declaración de Variable

    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".is-form");
    const registerForm = document.querySelector(".rg-form");

// Login button function
    loginBtn.addEventListener('click', ()=> {
        loginBtn.style.backgroundColor = "#000000";
        registerBtn.style.backgroundColor = "rgb(49, 23, 119)";

        loginForm.style.left = "50%";
        registerForm.style.left = "-50%";

        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;

        document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
    })
    
// Register button function
    registerBtn.addEventListener('click', ()=> {
        loginBtn.style.backgroundColor = "rgb(49, 23, 119)";
        registerBtn.style.backgroundColor = "#000000";

        loginForm.style.left = "150%";
        registerForm.style.left = "50%";

        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;

        document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
    })






const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    cont form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    
    if (login === "" || password === "") {
      alert("Wszystkie pola powinny zostać wypełnione.");
    }

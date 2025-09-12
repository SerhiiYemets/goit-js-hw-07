const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === "" || trimmedPassword === "") {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: trimmedEmail,
        password: trimmedPassword,
    }
    console.log(formData);
    form.reset();
});








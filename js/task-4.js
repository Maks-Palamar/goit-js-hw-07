const form = document.querySelector('.login-form');
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const formTarg = event.target;
    const eMail = formTarg.elements.email.value.trim();
    const passWrd = formTarg.elements.password.value.trim();

    if (eMail === "" || passWrd === "") {
        alert("Будь ласка, заповніть всі поля!");
        return;
      }

    const uData = {
        email: eMail,
        password: passWrd,
    }

    console.log(uData);

    form.reset();
}
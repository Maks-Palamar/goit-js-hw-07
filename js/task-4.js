const form = document.querySelector('.login-form');
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const formTarg = event.target;
    const eMail = formTarg.elements.email.value;
    const passWrd = formTarg.elements.password.value;

    if (eMail === "" || passWrd === "") {
        return console.log("Please fill in all the fields!");
      }

    const uData = {
        email: eMail,
        password: passWrd,
    }

    console.log(uData);

    form.reset();
}

const email = document.getElementById("email-input")
const submitBtn = document.getElementById("submit-btn");
const subscirbeForm = document.getElementById("subscribe-form");
const emailError = document.querySelector(".email-error")


subscirbeForm.addEventListener("submit", (event) => {
    event.preventDefault()

    if (email.value.trim() === "") {
        emailError.textContent = "Email input is empty"
        return
    }

    validateEmail()

})


function feedBack() {
    alert(`${email.value.trim()} \n \n Thanks for subscribing!`)
    email.value = ""
}

function validateEmail() {
    emailError.textContent = ""
    let regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regExpr.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email format"
        return
    } else {
        emailError.textContent = ""
        feedBack()
    }

}



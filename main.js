
const email = document.getElementById("email-input")
const submitBtn = document.getElementById("submit-btn");
const subscirbeForm = document.getElementById("subscribe-form");
const emailError = document.querySelector(".email-error")


subscirbeForm.addEventListener("submit", (event) => {
    event.preventDefault()

    validateEmail()
    FeedBack()


})


function FeedBack() {
    alert(`${email.value.trim()} \n \n Thanks for subscribing!`)
}

function validateEmail() {
    let regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() == "") {
        emailError.textContent = "Email input is empty"
    }

    if (!regExpr.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email format"
    }
    console.log("Validated ")
}



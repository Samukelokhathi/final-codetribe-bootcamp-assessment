
const userInput = document.getElementById("email-input")
const submitBtn = document.getElementById("submit-btn");
const formElement = document.getElementById("Newsletter-signup-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault()



    // console.log(userInput)


    clearInput()
})


function currentEmail() { return userInput.value.trim() }

// function validateEmail() {
//     let regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     if (!regExpr.test(email.value)) {
//         emailError.textContent = "Enter a valid email format"
//     }
// }

function clearInput() {
    userInput.value = ""
}



function saveEmail() {
    let latestEmail = []

}
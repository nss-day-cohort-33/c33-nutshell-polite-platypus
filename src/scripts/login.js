function signUp() {
    return `
    <form action="" class="form">
            <label for="Username">Username</label>
            <input type="text" name="username" id="userName" class="label" required>
            <label for="Email">Email</label>
            <input type="text" name="email" id="emailAddress" class="label" required>
            <label for="Password">Password</label>
            <input type="text" name="password" id="loginPassword" class="label" required>
        </form>
        <button type="Button" id="signUpBtn">Register</button>
        <p>Already have an account? <button id="signInLink">Sign In</button></p>
        `
}


function logIn() {
    return `
    <form>
    <label for="conceptsCovered">Email</label>
    <input type="text" name="email" id="emailAddress" class="label" required><br />
    <label for="jornalEntry">Password</label>
    <input type="text" name="password" id="loginPassword" class="label" required>
    </form>
    <button id="loginBtn">Login</button>
    `
}

let domRepop = document.querySelector("#loginForm")
let homePop = document.querySelector("#homePage")


function printSignUpComponent() {
    domRepop.innerHTML += signUp()
}

function printLoginComponent() {
    domRepop.innerHTML = ""
    domRepop.innerHTML += logIn()
    document.querySelector("#loginBtn").addEventListener("click", () => {
        domRepop.innerHTML = ""
        homePop.removeAttribute("hidden")
    })
}
function loginSignupToDom() {
    document.querySelector("#signupLoginBtn").addEventListener("click", () => {
        document.getElementById("signupLoginBtn").style.visibility = "hidden"
        printSignUpComponent()

        document.querySelector("#signUpBtn").addEventListener("click", () => {
            domRepop.innerHTML = ""
            homePop.removeAttribute("hidden")
        })

        document.querySelector("#signInLink").addEventListener("click", () => {
            domRepop.innerHTML = ""
            printLoginComponent()
        })
    })
}
export {loginSignupToDom}





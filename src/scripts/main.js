// function that creates signup component
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
        <button type="Button" id="signUp-btn">Register</button>
        <p>Already have an account? <a id="signInLink" href="">Sign In</a></p>
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


let domRepop = document.querySelector("#test")

function printSignUpComponent() {
    domRepop.innerHTML += signUp()
}

function printLoginComponent() {
    domRepop.innerHTML = ""
    domRepop.innerHTML += logIn()
}

document.querySelector("#signupLoginBtn").addEventListener("click", () => {
    document.getElementById("signupLoginBtn").style.visibility="hidden"
    printSignUpComponent()
})


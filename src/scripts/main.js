import {messageToDOM} from "./MessageDOMComponent"

const messages =
    {
    id: 1,
    user_id: 1,
    name: "Sam",
    text: "This is a message"
}

messageToDOM(messages)

// //Sign Up Component
    let signUpComponent =
    `<fieldset>
    <label>Name</label>
    <input type="text"/>
    <label>Email</label>
    <input type="text"/>
    <label>Password</label>
    <input type="text"/>
    <button>Sign Up</button>
    </fieldset>
    `
// //Login Component
    let loginComponent =
    `<fieldset>
    <label>Email</label>
    <input type="text"/>
    <label>Password</label>
    <input type="text"/>
    <button class="loginBTN">Login</button>
    </fieldset>
    `
document.querySelector("#loginContainer").innerHTML = loginComponent

let loginBTN = document.querySelector("#loginBTN")

// loginBTN.addEventListener("click", () => {
// })


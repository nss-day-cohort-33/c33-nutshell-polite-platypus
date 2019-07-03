import {bringModalForm, handleArtModal} from "./form.js";

let signUpComponent = `<fieldset>
    <label>Name</label>
    <input type="text"/>
    <label>Email</label>
    <input type="text"/>
    <label>Password</label>
    <input type="text"/>
    <button>Sign Up</button>
    </fieldset>
    `;
let loginComponent = `<fieldset>
    <label>Email</label>
    <input type="text"/>
    <label>Password</label>
    <input type="text"/>
    <button class="loginBTN">Login</button>
    </fieldset>
    `;
document.querySelector("#loginContainer").innerHTML = loginComponent;

// let loginBTN = document.querySelector("#loginBTN");

// loginBTN.addEventListener("click", () => {});

bringModalForm()
handleArtModal()

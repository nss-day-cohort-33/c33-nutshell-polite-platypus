console.log(
  "Your Webpack application is set up and ready to go. Please start writing code."
);


function taskHTML(fakeName) {
  console.log(fakeName);
  console.log(fakeName.name);



import { messageToDOM } from "./MessageDOMComponent";
import { bringModalForm, handleArtModal, dismissModalForm } from "./form.js";
import { getArticles } from "./api";
import {renderArticles, bringAllArticles, goHome} from "./domStuff"
const messages = {
  id: 1,
  user_id: 1,
  name: "Sam",
  text: "This is a message"
};

messageToDOM(messages);

// //Sign Up Component
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

bringModalForm();
handleArtModal();
// document.querySelector(".cancelBtn").addEventListener("click", () => {
//   dismissModalForm();
// });
bringAllArticles()
goHome()

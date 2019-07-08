console.log(
  "Your Webpack application is set up and ready to go. Please start writing code."
);

const tasks = {
  id: 1,
  user_id: 1,
  name: "Thomas",
  text: "First task",
  due_date: "date"
};

let taskPage = document.querySelector("#taskContainer");

function taskHTML(fakeName) {
  console.log(fakeName);
  console.log(fakeName.name);

  return `
    <div>
        <title>Tasks</title>
        <section>
            <h2>${fakeName.name}</h2>
            <p>${fakeName.text}</p>
        </section>
        <section>
            <input type="text">Enter Task Here</input>
            <button id="addTask">Add</button>
        </section>
    </div>
        `;
}

function taskToDOM(passingTask) {
  taskPage.innerHTML = "";
  taskPage.innerHTML += taskHTML(passingTask);
}

taskToDOM(tasks);
import { messageToDOM } from "./MessageDOMComponent";
import { bringModalForm, handleArtModal, dismissModalForm, emptyArtInputs } from "./form.js";
import { getArticles } from "./api";
import {renderArticles, bringAllArticles, goHome, makeDeleteBtnsWrk} from "./domStuff"
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
document.querySelector("#ArtCancelBtn").addEventListener("click", () => {
  dismissModalForm();
  emptyArtInputs()
});
// bringAllArticles()
goHome()


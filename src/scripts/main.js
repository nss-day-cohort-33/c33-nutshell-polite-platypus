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

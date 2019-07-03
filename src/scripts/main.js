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

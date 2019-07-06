const tasks =
    {
    id: 1,
    user_id: 1,
    task: "Make this program work",
    complete: Boolean,
    date: date
}

let taskPage = document.querySelector("#taskContainer")

function taskHTML(createdTask) {
    return `
    <div>
        <title>Tasks</title>
        <section class="messageBox">
            <h2>${createdTask.name}</h2>
            <p>${createdTask.text}</p>
        </section>
        <section>
            <input type="text"></input>
            <button id="addTask">Send</button>
        </section>
    </div>
        `
}

function taskToDOM(passingTask) {
    taskPage.innerHTML = ""
    taskPage.innerHTML += taskHTML(passingTask)
}

taskToDOM(tasks)

document.querySelector("#addTask").addEventListener( "click", () => {
    console.log("clicked")
}
)

export {taskToDOM}
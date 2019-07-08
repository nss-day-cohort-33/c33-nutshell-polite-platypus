import { create } from "domain";

// const messages =
//     {
//     id: 1,
//     user_id: 1,
//     name: "Sam",
//     text: "This is a message"
// }

// let messagePage = document.querySelector("#container")

function messageHTML(createdMessage) {
    return `
    <div>
        <section class="messageBox" id="messageCard--${createdMessage.id}">
            <h2>${createdMessage.name}</h2>
            <h4>${createdMessage.date}</h4>
            <p>${createdMessage.text}</p>
            <button id="delete--${createdMessage.id}" class="deleteBtn">delete</button>
            <button id="edit--${createdMessage.id}" class="editBtn">edit</button>
        </section>
    </div>
        `
}

function formHTML(form) {
    return `
    <section class="messageBox" id="messageForm">
        <label>Name</label>
        <input type="text" id="messageName">
        <label>New Message</label>
        <input type="text" id="message" />
        <label>Date</label>
        <input type="date" id="messageDate" />
        <button id="messageSubmitBtn">submit</button>
    </section>
    `
}

// function messageToDOM(passingMessage) {
//     messagePage.innerHTML = ""
//     messagePage.innerHTML += messageHTML(passingMessage)
// }

// messageToDOM(messages)

// document.querySelector("#sendMessage").addEventListener( "click", () => {
//     console.log("clicked")
// }
// )

export {messageHTML, formHTML}
const messages =
    {
    id: 1,
    user_id: 1,
    name: "Sam",
    text: "This is a message"
}

let messagePage = document.querySelector("#messageContainer")

function messageHTML(createdMessage) {
    return `
    <div>
        <title>Messages</title>
        <section class="messageBox">
            <h2>${createdMessage.name}</h2>
            <p>${createdMessage.text}</p>
        </section>
        <section>
            <input type="text"></input>
            <button id="sendMessage">Send</button>
        </section>
    </div>
        `
}

function messageToDOM(passingMessage) {
    messagePage.innerHTML = ""
    messagePage.innerHTML += messageHTML(passingMessage)
}

messageToDOM(messages)

document.querySelector("#sendMessage").addEventListener( "click", () => {
    console.log("clicked")
}
)

export {messageToDOM}
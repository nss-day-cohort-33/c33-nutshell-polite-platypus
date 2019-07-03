let messagePage = document.querySelector(#logInContainer)

function messageHTML() {
    return `
    <div>
        <title>Messages</title>
        <section>
            <h2>${message.user_id.name}</h2>
            <p>${message.text}</p>
        </section>
        <section>
            <input type="text">Type Message Here</input>
            <button id="sendMessage">Send</button>
        </section>
    </div>
        `
}
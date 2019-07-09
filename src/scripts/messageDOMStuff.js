import { messageHTML, formHTML } from "./MessageDOMComponent";
import { getMessages } from "./messageAPI";
import { handleMessageSubmit } from "./messageForm";

function renderMessages(array) {
    for (let i = 0; i < array.length; i++) {
      document.querySelector("#container").innerHTML += messageHTML(array[i]);
    }
  }

function renderForm(array) {
    document.querySelector("#container").innerHTML += formHTML(array)
    handleMessageSubmit()
    }

function bringAllMessages() {
    document.querySelector("#messageBtn").addEventListener("click", () => {
        getMessages().then( messageData => {
            renderMessages(messageData)
            renderForm(messageData)
      })
    })
}

let messageBtn = document.querySelector("#messageBtn");
messageBtn.addEventListener("click", () => {
  bringAllMessages();
  messageBtn.setAttribute("disabled", "");
  document.querySelector("#container").innerHTML = ""
});

export { bringAllMessages, messageBtn }
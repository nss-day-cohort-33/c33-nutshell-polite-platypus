import { messageToDOM } from "./MessageDOMComponent";

function getMessages() {
  return fetch("http://localhost:8088/messages")
  .then( messageData => messageData.json() )
  .then( messageData => {
    messageToDOM(messageData)})
}

export { getMessages }
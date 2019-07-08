import { messageToDOM } from "./MessageDOMComponent";

function getMessages() {
  return fetch("http://localhost:8088/messages")
  .then( messageData => messageData.json() )
}

function saveMessages(article) {
  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  });
}
export { getMessages, saveMessages }


// function getArticles() {
//   return fetch("http://localhost:8088/articles").then(articles =>
//     articles.json()
//   )
// }
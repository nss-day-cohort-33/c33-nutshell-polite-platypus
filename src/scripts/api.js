// import { renderArticles } from "./domStuff.js";

function saveArticle(article) {
  return fetch("http://localhost:8088/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  });
}
function getArticles() {
  return fetch("http://localhost:8088/articles").then(articles =>
    articles.json()
  )
}




export { saveArticle, getArticles, };

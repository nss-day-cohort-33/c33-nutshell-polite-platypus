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
  );
}

function getOneArticle(num) {
  return fetch(`http://localhost:8088/articles/${num}`).then(article =>
    article.json()
  );
}

function deleteArticle(num) {
  return fetch(`http://localhost:8088/articles/${num}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export { saveArticle, getArticles, getOneArticle, deleteArticle };

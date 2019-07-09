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

// function getUser(resource, queryParams) {
//   let url = `http://localhost:8088/${resource}`
//   if (queryParams) {
//     url += `?${queryParams}`
//   }
//   return fetch(url)
//   .then( data => data.json() )
// }

function getUsers() {
  return fetch("http://localhost:8088/users").then(users => users.json());
}

export { saveArticle, getArticles, getOneArticle, deleteArticle, getUsers };

import { makeArtComp } from "./DOMComponent.js";
import { getArticles } from "./api.js";

function renderArticles(array) {
  for (let i = 0; i < array.length; i++) {
    document.querySelector("#container").innerHTML += makeArtComp(array[i]);
  }
}
function bringAllArticles() {
  document.querySelector("#testBtn").addEventListener("click", () => {
    getArticles().then(articles => {
      renderArticles(articles);
    });
  });
}

function goHome() {
  document.querySelector("#testBtn2").addEventListener("click", () => {
    document.querySelector("#container").innerHTML = ""
  })
}
export { bringAllArticles, goHome };

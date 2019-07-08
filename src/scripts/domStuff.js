import { makeArtComp } from "./DOMComponent.js";
import { getArticles, deleteArticle } from "./api.js";

function renderArticles(wrong) {
  let array = wrong.reverse();
  for (let i = 0; i < array.length; i++) {
    document.querySelector("#container").innerHTML += makeArtComp(array[i]);
  }
  makeDeleteBtnsWrk();
}
function bringAllArticles() {
  // console.log("bringing");
  getArticles().then(articles => {
    renderArticles(articles);
  });
}
let articlesBtn = document.querySelector("#testBtn");
articlesBtn.addEventListener("click", () => {
  // console.log("brought'n");
  bringAllArticles();
  articlesBtn.setAttribute("disabled", "");
});

function goHome() {
  document.querySelector("#testBtn2").addEventListener("click", () => {
    document.querySelector("#container").innerHTML = "";
    articlesBtn.removeAttribute("disabled", "");
  });
}
function makeDeleteBtnsWrk() {
  let deleteArtBtnArr = document.querySelectorAll(".deleteArtBtn");
  // console.log(deleteArtBtnArr);
  for (let i = 0; i < deleteArtBtnArr.length; i++) {
    deleteArtBtnArr[i].addEventListener("click", () => {
      // console.log("working");
      let btnNum = deleteArtBtnArr[i].id.split("--");
      let artNum = deleteArtBtnArr[i].parentElement.id.split("--");
      if (artNum[1] === btnNum[1]) {
        // console.log(artNum[1]);
        deleteArticle(artNum[1]).then(() => {
          document.querySelector("#container").innerHTML = "";
          bringAllArticles();
        });
      }
    });
  }
}
export { bringAllArticles, goHome };

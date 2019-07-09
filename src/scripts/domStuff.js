import { makeArtComp } from "./DOMComponent.js";
import { getArticles, deleteArticle } from "./api.js";
import { messageBtn } from "./messageDOMStuff.js";

function renderArticles(wrong) {
  let array = wrong.reverse();
  for (let i = 0; i < array.length; i++) {
    document.querySelector("#container").innerHTML += makeArtComp(array[i]);
  }
  // if(array[i] === 1) {
  //   console.log(array[i])
  // }
  makeDeleteBtnsWrk();
}
function bringAllArticles() {
  console.log("brought");
  // document.querySelector("artOne").classList.add("activated")
  // console.log(document.querySelector("artOne").classlist)
  getArticles().then(articles => {
    renderArticles(articles);
  });
}
let articlesBtn = document.querySelector("#testBtn");
articlesBtn.addEventListener("click", () => {
  // console.log("brought'n");
  bringAllArticles();
  articlesBtn.setAttribute("disabled", "");
  // console.log(articlesBtn)
});

function goHome() {
  document.querySelector("#testBtn2").addEventListener("click", () => {
    document.querySelector("#container").innerHTML = "";
    articlesBtn.removeAttribute("disabled", "");
    messageBtn.removeAttribute("disabled", "");
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
export { bringAllArticles, goHome, articlesBtn };

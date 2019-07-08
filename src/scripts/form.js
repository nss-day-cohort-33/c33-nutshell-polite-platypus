import { saveArticle } from "./api.js";
import { bringAllArticles } from "./domStuff.js";

let bodyBlackout = document.querySelector(".bodyBlackout");
let formBtns = document.querySelectorAll(".modalBtn");
let submitBtns = document.querySelectorAll(".submitBtn");
function bringModalForm() {
  formBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      let { modalBtn } = btn.dataset;
      // console.log("dataset", btn.dataset);
      // console.log("btn", btn);
      let modalWin = document.querySelector(`[data-formDes="${modalBtn}"]`);
      // console.log(modalWin.children);
      modalWin.children[1].focus()
      modalWin.classList.add("visible");
      bodyBlackout.classList.add("blackedOut");
    });
  });
}

let artDate = document.querySelector("#artDate");
let artSyn = document.querySelector("#artSynopsis");
let artTitle = document.querySelector("#artTitle");
let artLink = document.querySelector("#artLink");
function handleArtModal() {
  submitBtns.forEach(btn => {
    // console.log(btn.parentElement.id);
    if (btn.parentElement.id === "articleModal") {
      btn.addEventListener("click", () => {
        if (
          artTitle.value === "" ||
          artSyn.value === "" ||
          artDate.value === ""
        ) {
          artTitle.focus()
          alert("Title, Synopsis, and Date required");
        } else {
          let capturedArtFormData = {
            title: artTitle.value,
            synopsis: artSyn.value,
            link: artLink.value,
            date: artDate.value
          };
          saveArticle(capturedArtFormData).then(() => {
            if (
              document
                .querySelector("#container")
                .innerHTML.includes(artComponent)
            ) {
              document.querySelector("#container").innerHTML = "";
              bringAllArticles();
            }
          });
          emptyArtInputs();
          dismissModalForm(btn);
        }
      });
    }
  });
}
function emptyArtInputs() {
  artDate.value = "";
  artLink.value = "";
  artSyn.value = "";
  artTitle.value = "";
}
function dismissModalForm() {
  bodyBlackout.classList.remove("blackedOut");
  document.querySelector("#articleModal").classList.remove("visible");
}

export { bringModalForm, handleArtModal, dismissModalForm, emptyArtInputs };

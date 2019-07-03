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
      // console.log(modalWin);
      modalWin.classList.add("visible");
      bodyBlackout.classList.add("blackedOut");
    });
  });
}

function handleArtModal() {
  let artDate = document.querySelector("#artDate");
  let artSyn = document.querySelector("#artSynopsis");
  let artTitle = document.querySelector("#artTitle");
  let artLink = document.querySelector("#artLink");
  submitBtns.forEach(btn => {
    // console.log(btn.parentElement.id);
    if (btn.parentElement.id === "articleModal") {
      btn.addEventListener("click", () => {
        // console.log("working");
        if (
          artTitle.value === "" ||
          artSyn.value === "" ||
          artDate.value === ""
        ) {
          alert("Title, Synopsis, and Date required");
        } else {
          let capturedArtFormData = {
            title: artTitle.value,
            synopsis: artSyn.value,
            link: artLink.value,
            date: artDate.value
          };
          console.log(capturedArtFormData);
          artDate.value = "";
          artLink.value = "";
          artSyn.value = "";
          artTitle.value = "";
          dismissModalForm(btn);
        }
      });
    }
  });
}

function dismissModalForm(thing) {
  bodyBlackout.classList.remove("blackedOut");
  thing.parentNode.classList.remove("visible");
}

export { bringModalForm, handleArtModal };

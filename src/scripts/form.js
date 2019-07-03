function bringModalForm() {
  let formBtns = document.querySelectorAll(".modalBtn");
  let bodyBlackout = document.querySelector(".bodyBlackout");
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

function dismissModalForm() {
  let submitBtns = document.querySelectorAll(".submitBtn");
  submitBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      bodyBlackout.classList.remove("blackedOut");
      btn.parentNode.classList.remove("visible");
    });
  });
}

function saveArtFormData() {
    
}


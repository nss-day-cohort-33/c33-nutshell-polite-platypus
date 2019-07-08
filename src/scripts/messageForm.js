import { bringModalForm, dismissModalForm } from "./form";
import { saveMessages } from "./messageAPI";

let bodyBlackout = document.querySelector(".bodyBlackout");
let formBtns = document.querySelectorAll(".modalBtn");


// function bringModalForm() {
//     formBtns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         let { modalBtn } = btn.dataset;
//         // console.log("dataset", btn.dataset);
//         // console.log("btn", btn);
//         let modalWin = document.querySelector(`[data-formDes="${modalBtn}"]`);
//         // console.log(modalWin);
//         modalWin.classList.add("visible");
//         bodyBlackout.classList.add("blackedOut");
//       });
//     });
//   }

// function handleMessageModal() {
//     let messageDate = document.querySelector("#messageDate");
//     let messageText = document.querySelector("#message");
//     let messageName = document.querySelector("#messageName")
//     submitBtns.forEach(btn => {
//       // console.log(btn.parentElement.id);
//       if (btn.parentElement.id === "messageModal") {
//         btn.addEventListener("click", () => {
//           if (
//             messageDate.value === "" ||
//             messageText.value === ""
//           ) {
//             alert("Title and Date required");
//           } else {
//             let capturedMessageFormData = {
//               name: messageName.value,
//               text: messageText.value,
//               date: messageDate.value
//             };
//             saveMessages(capturedMessageFormData);
//             messageName.value = "";
//             messageText.value = "";
//             messageDate.value = ""
//             dismissModalForm(btn);
//           }
//         });
//       }
//     });
//   }


function handleMessageSubmit () {
    let messageNameSubmit = document.querySelector("#messageName");
    let messageTextSubmit = document.querySelector("#message");
    let messageDateSubmit = document.querySelector("#messageDate")
    let messageSubmitBtn = document.querySelector("#messageSubmitBtn")
    messageSubmitBtn.addEventListener("click", () => {
        console.log("clicked")
            if (
            messageNameSubmit.value === "" ||
            messageTextSubmit.value === "" ||
            messageDateSubmit.value === ""
            ) {
            alert("Name, New Message, and Date Required")
        } else {
            let capturedMessageFormData = {
                name: messageNameSubmit.value,
                text: messageTextSubmit.value,
                date: messageDateSubmit.value
            };
            saveMessages(capturedMessageFormData);
            messageNameSubmit.value = "";
            messageTextSubmit.value = "";
            messageDateSubmit.value = ""
          }
        });
      }

export {handleMessageSubmit}
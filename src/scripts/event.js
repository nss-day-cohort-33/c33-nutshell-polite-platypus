function getEvents() {
    return fetch("http://localhost:8088/events").then( data => data.json())
  }

function makeEventComponent(event) {
    return `
    <div id="event-card--${event.id}">
        <h1>${event.name}</h1>
        <h2>${event.date}</h2>
        <p>${event.location}</p>
        <button id="edit-${event.id}" class="eventEditBtn">Edit</button>
        <button id="delete-${event.id}" class="eventDeleteBtn">Delete</button>
    </div>
    `
}


function printEvents( arr) {
    for(let i = 0; i < arr.length; i++) {
        document.querySelector("#eventContainer").innerHTML += makeEventComponent(arr[i])
    }
    delEntry()
}

function printEventsToDom() {
    document.querySelector("#eventPageBtn").addEventListener("click", () => {
        getEvents().then( data => {
            printEvents(data)
        })
    })
}

function deleteEventEntry(id) {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( data => data.json())
}

function delEntry() {
    let deleteBtnArr = document.querySelectorAll(".eventDeleteBtn")
    deleteBtnArr.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", () => {
            console.log("is this delete?")
            let btnID = event.target.id.split("-")[1]
            console.log(btnID)
            deleteEventEntry(btnID)
            printEventsToDom()
        })
    })
}
export {printEventsToDom}
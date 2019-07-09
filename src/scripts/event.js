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
}

function printEventsToDom() {
    document.querySelector("#eventPageBtn").addEventListener("click", () => {
        getEvents().then( data => {
            printEvents(data)
        })
    })
}

export {printEventsToDom}
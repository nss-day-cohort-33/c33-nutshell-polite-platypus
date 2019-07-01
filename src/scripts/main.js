//Sign Up Component
    let signUpComponent =
    `<fieldset>
    
    <label>Name</label>
    <input type="text"/>
    
    <label>Email</label>
    <input type="text"/>
    
    <label>Password</label>
    <input type="text"/>
    
    <button>Sign Up</button>
    
    </fieldset>
    `

//Login Component
    let loginComponent =
    `<fieldset>

    <label>Email</label>
    <input type="text"/>

    <label>Password</label>
    <input type="text"/>

    <button>Login</button>

    </fieldset>
    `

    document.querySelector("#logInContainer").innerHTML = loginComponent

let logInContainer = document.querySelector("#logInContainer")

    logInContainer.addEventListener("click", () => {
        document.querySelector("#homeContainer").classList.remove("hidden")
})


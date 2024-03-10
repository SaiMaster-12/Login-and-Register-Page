const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click",()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Get the login button element
const loginBtn = document.getElementById("loginBtn1");

// Add click event listener to the login button
loginBtn.addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Redirect to the desired URL
    window.location.href = "home.html";
});



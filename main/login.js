const loginForm = document.querySelector(".login-form");
const usernameInput = loginForm.querySelector('input[type="text"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Please fill all details";
        return;
    }

    errorMsg.style.display = "none";

    if (username === "admin" && password === "12345") {
        alert("Login successful ✅");
        window.location.href = "resources.html";
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid username or password";
    }
});
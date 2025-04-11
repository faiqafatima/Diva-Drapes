document.addEventListener("DOMContentLoaded", function () {
    // Login Functionality
    document.querySelector("#login-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.querySelector("#login-email").value;
        let password = document.querySelector("#login-password").value;
        
        if (email === "test@example.com" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password");
        }
    });

    // Signup Functionality
    document.querySelector("#signup-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#signup-name").value;
        let email = document.querySelector("#signup-email").value;
        let password = document.querySelector("#signup-password").value;
        
        if (name && email && password) {
            alert("Signup Successful! You can now log in.");
            window.location.href = "login.html";
        } else {
            alert("Please fill out all fields");
        }
    });

    // Feedback Form
    document.querySelector("#feedback-form")?.addEventListener("submit", function (e) {
        e.preventDefault();
        let feedback = document.querySelector("#feedback-message").value;
        
        if (feedback.trim() !== "") {
            alert("Thank you for your feedback!");
        } else {
            alert("Please enter feedback before submitting");
        }
    });

    // Chatbox Functionality
    document.querySelector("#chat-send")?.addEventListener("click", function () {
        let input = document.querySelector("#chat-input");
        let messages = document.querySelector("#chat-messages");
        
        if (input.value.trim() !== "") {
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("user-message");
            messageDiv.textContent = input.value;
            messages.appendChild(messageDiv);
            input.value = "";
            messages.scrollTop = messages.scrollHeight;
        } else {
            alert("Please type a message before sending");
        }
    });
});

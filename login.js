document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            clearError("error-message");

            if (!isValidEmail(email)) {
                showError("error-message", "Please enter a valid email address.");
                return;
            }

            const registeredEmails = getRegisteredUsers();

            const user = registeredEmails.find(u => u.email === email);

            if (!user) {
                showError("error-message", "No account found with that email.");
                return;
            }

            if (user.password !== password) {
                showError("error-message", "Incorrect password.");
                return;
            }

            alert("Login successful!");
            window.location.href = "products.html";
        });
    }
});
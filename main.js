document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullName = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            clearError("error-message");

            if (fullName === "") {
                showError("error-message", "Please enter your full name.");
                return;
            }

            if (!isValidEmail(email)) {
                showError("error-message", "Please enter a valid email address.");
                return;
            }

            const registeredEmails = getRegisteredUsers();

            if (registeredEmails.some(u => u.email === email)) {
                showError("error-message", "An account with this email already exists.");
                return;
            }

            if (password.length < 6) {
                showError("error-message", "Password must be at least 6 characters.");
                return;
            }

            if (password !== confirmPassword) {
                showError("error-message", "Passwords do not match.");
                return;
            }

            // Add new user
            registeredEmails.push({ email, password });
            saveRegisteredUsers(registeredEmails);

            alert("Registration successful!");
            window.location.href = "products.html";
        });
    }
});
function getRegisteredUsers() {
    const users = localStorage.getItem("users");
    console.log("Loaded users:", users ? JSON.parse(users) : []);
    return users ? JSON.parse(users) : [];
}
function saveRegisteredUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Saved users:", users);
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
        el.style.display = "block";
    }
}
function clearError(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = "";
        el.style.display = "none";
    }
}
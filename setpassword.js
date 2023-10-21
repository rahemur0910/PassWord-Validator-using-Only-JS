document.querySelector("form").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

const passwordField = document.getElementById("passwordField");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const showPasswordButton = document.getElementById("showPassword");
const passwordForm = document.getElementById("passwordForm");

showPasswordButton.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
    showPasswordButton.textContent = "Hide Password";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
    showPasswordButton.textContent = "Show Password";
  }
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password.length >= 4) {
    if (password === confirmPassword) {
      // Store the password in localStorage
      localStorage["password"] = password;
      
      // Redirect to login.html
      window.location.href = "login.html";
    } else {
      alert("Passwords do not match. Please try again.");
    }
  } else {
    alert("Password should be a minimum of 4 characters.");
  }
});

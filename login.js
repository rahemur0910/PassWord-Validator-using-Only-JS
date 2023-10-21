const passwordField = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  // Retrieve the entered password from the input field
  const enteredPassword = passwordField.value;
  const storedPassword = localStorage.getItem("password");

  if (enteredPassword === storedPassword) {
    // Redirect to the view.html page
    window.location.href = `view.html?password=${encodeURIComponent(storedPassword)}`;
  } else {
    alert("Password is incorrect");
  }
});

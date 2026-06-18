const ValidateForm = (event) => {
  event.preventDefault();

  let username = event.target.username;
  let password = event.target.password;
  let error = document.getElementById("error");

  error.innerHTML = "";

  // Reset border colors
  username.style.borderColor = "#ddd";
  password.style.borderColor = "#ddd";

  // Both empty
  if (username.value.trim() === "" && password.value.trim() === "") {
    error.innerHTML = "Please enter Username and Password";
    username.style.borderColor = "red";
    password.style.borderColor = "red";
    return false;
  }

  // Username empty
  if (username.value.trim() === "") {
    error.innerHTML = "Please enter Username";
    username.style.borderColor = "red";
    username.focus();
    return false;
  }

  // Password empty
  if (password.value.trim() === "") {
    error.innerHTML = "Please enter Password";
    password.style.borderColor = "red";
    password.focus();
    return false;
  }

  error.innerHTML = "Login Successful";
  error.style.color = "green";

  return true;
};

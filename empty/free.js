const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function() {
  if (loginButton.innerText === 'Login') {
    loginButton.innerText = 'Logout';
    loginButton.style.backgroundColor = 'green';
  } else {
    loginButton.innerText = 'Login';
    loginButton.style.backgroundColor = '';
  }
});

function toggleLoginForm() {
    var form = document.getElementById("login-form");
    var button = document.getElementById("login-button");
    if (form.style.display === "none") {
      form.style.display = "inline-block";
      form.style.position = "absolute";
      form.style.left = "47%";
     
      form.style.top = "0%";
      button.style.backgroundColor = "green";
      button.innerHTML = "Logout";
    } else {
      form.style.display = "none";
      button.style.backgroundColor = "";
      button.innerHTML = "Login";
    }
  }
  loginBtn.addEventListener('click', function() {
    loginForm.style.display = 'block';
  });
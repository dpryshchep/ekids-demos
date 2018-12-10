var correctLogin = "user";
var correctPassword = "password";

var url = new URL(window.location.href);

var login = url.searchParams.get("login");
var password = url.searchParams.get("password");

if (login === correctLogin && password === correctPassword) {
  document.getElementsByClassName("cats")[0].style.display = 'flex';
  document.getElementsByClassName("error-message")[0].style.display = 'none';
} else {
  document.getElementsByClassName("error-message")[0].style.display = 'block';
  document.getElementsByClassName("logout")[0].style.display = 'none';
  document.getElementsByClassName("login")[0].style.display = 'block';
}

function submitLogout() {
  localStorage.setItem('user', '');
  localStorage.setItem('password', '');
}
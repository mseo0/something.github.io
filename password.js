// password.js
function checkPassword() {
  var passwordInput = document.getElementById('password').value.toLowerCase(); 
  var expectedPassword = 'sheryl is a weirdo'.toLowerCase(); // Convert to lowercase

  if (passwordInput === expectedPassword) {
    // Redirect to the main page if the password is correct
    window.location.href = 'index.html';
  } else {
    alert('Incorrect password. Try again.');
  }
}
var noButtonTexts = ["stop being weird", "please","OK FINE U WEIRDO", "ur acc so mean wth", "please:(", "WHYYYY", "please🙏", "please🙏🙏🙏🙏🙏🙏🙏", "ok fine😒"];
var currentIndex = 0;
var clickCount = 0;

function handleNoClick() {
  var noButton = document.querySelector('.no-button');
  clickCount++;

  if (clickCount >= 2) {
    noButton.innerHTML = noButtonTexts[currentIndex];
    currentIndex = (currentIndex + 1) % noButtonTexts.length;
  }

  var maxX = window.innerWidth - noButton.clientWidth - 70;
  var maxY = window.innerHeight - noButton.clientHeight - 70;
  var randomX = Math.random() * maxX;
  var randomY = Math.random() * maxY;

  noButton.style.position = 'absolute';
  noButton.style.top = randomY + 'px';
  noButton.style.left = randomX + 'px';
  noButton.style.zIndex = 9999999;
  setTimeout(function() {
    noButton.style.display = 'block';
  }, 50);
}

function handleYesClick() {
  // Navigate to a new page when "Yes" is clicked
  window.location.href = 'yesPage.html';
}

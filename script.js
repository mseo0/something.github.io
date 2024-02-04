window.addEventListener('scroll', function () {
  const gif = document.getElementById('fixedGif');
  const rect = gif.getBoundingClientRect();
  gif.style.transform = `translate(-50%, -50%) translateY(${window.scrollY}px)`;
});
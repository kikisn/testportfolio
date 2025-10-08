const drawer = document.getElementById('drawer');
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
  drawer.classList.toggle('open');
  arrow.style.animationPlayState = drawer.classList.contains('open') ? 'paused' : 'running';
});

const drawer = document.getElementById('drawer');
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
  drawer.classList.add('open');

  // wait for drawer animation to finish before navigating
  setTimeout(() => {
    window.location.href = "drawer-content.html";
  }, 800);
});

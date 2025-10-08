const drawer = document.getElementById('drawer');
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

arrow.addEventListener('click', () => {
  drawer.classList.toggle('open');
  arrow.style.animationPlayState = drawer.classList.contains('open') ? 'paused' : 'running';
});

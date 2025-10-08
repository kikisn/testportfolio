// ✅ Declare elements only once
const drawer = document.getElementById('drawer');
const arrow = document.getElementById('arrow');

// ✅ Shared function to open drawer and navigate
function openDrawer() {
  // add "open" class for CSS animation
  drawer.classList.add('open');

  // pause arrow animation while opening
  arrow.style.animationPlayState = 'paused';

  // disable clicks during animation
  arrow.style.pointerEvents = 'none';
  drawer.style.pointerEvents = 'none';

  // wait for animation to finish, then go to next page
  setTimeout(() => {
    window.location.href = "drawer-content.html";
  }, 1000); // match your CSS transition duration
}

// ✅ Make both the arrow and drawer clickable
arrow.addEventListener('click', openDrawer);
drawer.addEventListener('click', openDrawer);

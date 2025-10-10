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
if (drawer && arrow) {
  arrow.addEventListener('click', openDrawer);
  drawer.addEventListener('click', openDrawer);
}

// ✅ Tab navigation handlers
const tabAgency = document.getElementById('tab-agency');
const tabAbout = document.getElementById('tab-about');
const tabDog = document.getElementById('tab-dog');
const tabMemories = document.getElementById('tab-memories');

if (tabAgency) {
  tabAgency.addEventListener('click', () => {
    window.location.href = "web-optimization.html";
  });
}

if (tabAbout) {
  tabAbout.addEventListener('click', () => {
    // Add your about page link here
    console.log('About tab clicked');
  });
}

if (tabDog) {
  tabDog.addEventListener('click', () => {
    // Add your dog days page link here
    console.log('Dog Days tab clicked');
  });
}

if (tabMemories) {
  tabMemories.addEventListener('click', () => {
    // Add your memories page link here
    console.log('Memories tab clicked');
  });
}

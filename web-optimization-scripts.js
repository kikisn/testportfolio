// === COLOR CIRCLE INTERACTIONS === //

// Get all color circles
const circles = document.querySelectorAll('.opt-circle');

// Color presets for each circle
const colorSets = {
  1: ['#FF6B6B', '#E85A4F', '#FF8585', '#D64545', '#FF4757'],
  2: ['#4ECDC4', '#45B7AF', '#5FD4CC', '#38A89F', '#2BCCC4'],
  3: ['#FFE66D', '#FFD93D', '#FFF176', '#FFC93C', '#FFEB3B']
};

// Track current color index for each circle
let colorIndexes = { 1: 0, 2: 0, 3: 0 };

// Add click event to each circle to cycle through colors
circles.forEach(circle => {
  circle.addEventListener('click', function() {
    const circleNum = parseInt(this.getAttribute('data-color'));
    
    // Cycle to next color
    colorIndexes[circleNum] = (colorIndexes[circleNum] + 1) % colorSets[circleNum].length;
    
    // Apply new color
    this.style.backgroundColor = colorSets[circleNum][colorIndexes[circleNum]];
    
    // Add active class temporarily
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
    }, 300);
  });
  
  // Add visual feedback on hover
  circle.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2)';
  });
  
  circle.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'scale(1)';
    }
  });
});

// === ARROW INTERACTIONS === //

// Get arrow and page elements
const leftArrow = document.querySelector('.opt-left-arrow');
const rightArrow = document.querySelector('.opt-right-arrow');
const leftPage = document.querySelector('.opt-left-page');
const rightPage = document.querySelector('.opt-right-page');

// Left arrow hover effects on left page
if (leftArrow && leftPage) {
  leftArrow.addEventListener('mouseenter', () => {
    // Left page - subtle corner fold from RIGHT edge (binding)
    // Small rotation to create natural corner lift effect
    leftPage.style.transform = 'perspective(2500px) rotateY(-2deg) translateZ(5px)';
    leftPage.style.boxShadow = '-8px 5px 15px rgba(0, 0, 0, 0.25)';
    leftPage.style.filter = 'brightness(1.02)';
  });
  
  leftArrow.addEventListener('mouseleave', () => {
    leftPage.style.transform = 'perspective(2500px) rotateY(0deg) translateZ(0px)';
    leftPage.style.boxShadow = 'none';
    leftPage.style.filter = 'brightness(1)';
  });
  
  // Optional: Add click functionality for navigation
  leftArrow.addEventListener('click', () => {
    console.log('Previous page navigation');
    // Add your navigation logic here
  });
}

// Right arrow hover effects on right page
if (rightArrow && rightPage) {
  rightArrow.addEventListener('mouseenter', () => {
    // Right page - subtle corner fold from LEFT edge (binding)
    // Small rotation to create natural corner lift effect
    rightPage.style.transform = 'perspective(2500px) rotateY(2deg) translateZ(5px)';
    rightPage.style.boxShadow = '8px 5px 15px rgba(0, 0, 0, 0.25)';
    rightPage.style.filter = 'brightness(1.02)';
  });
  
  rightArrow.addEventListener('mouseleave', () => {
    rightPage.style.transform = 'perspective(2500px) rotateY(0deg) translateZ(0px)';
    rightPage.style.boxShadow = 'none';
    rightPage.style.filter = 'brightness(1)';
  });
  
  // Optional: Add click functionality for navigation
  rightArrow.addEventListener('click', () => {
    console.log('Next page navigation');
    // Add your navigation logic here
  });
}

// === TAB INTERACTIONS === //

// Get all tabs
const tabs = document.querySelectorAll('.opt-tab');

// Add click handlers for tab navigation
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    if (this.classList.contains('opt-tab-classified')) {
      console.log('Navigating to Classified page');
      // window.location.href = 'classified.html';
    } else if (this.classList.contains('opt-tab-dog')) {
      console.log('Navigating to Dog page');
      // window.location.href = 'dog.html';
    } else if (this.classList.contains('opt-tab-about-me')) {
      console.log('Navigating to About Me page');
      // window.location.href = 'about-me.html';
    } else if (this.classList.contains('opt-tab-agency')) {
      console.log('Returning to Agency/Drawer page');
      window.location.href = 'drawer-content.html';
    }
  });
});

// === SMOOTH ENTRANCE ANIMATIONS === //

// Fade in all elements on page load
window.addEventListener('load', () => {
  const container = document.querySelector('.optimization-container');
  if (container) {
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      container.style.opacity = '1';
    }, 100);
  }
});


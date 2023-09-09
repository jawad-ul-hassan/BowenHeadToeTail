// Hamburger
let menu = document.querySelector('.header-mobile-hamburger');
let menuIcon = document.querySelector('#hamburger-icon');
let navbar = document.querySelector('.header-mobile-nav');

menu.addEventListener('click', () => {
  if (navbar.classList.contains('active')) {
    menuIcon.src = 'images/hamburger.svg';
    navbar.classList.remove('active');
  } else {
    menuIcon.src = 'images/x.svg';
    navbar.classList.add('active');
  }
});

// Read More
const readMoreBtn = document.querySelector('.about-mobile-more-btn');
const readMoreText = document.querySelector('.about-mobile-more-btn-text');
const arrowIcon = document.querySelector('.about-mobile-arrow');
const aboutMobileMoreContent = document.querySelector(
  '.about-mobile-more-content'
);

readMoreBtn.addEventListener('click', () => {
  if (readMoreText.textContent === 'Read More') {
    readMoreText.textContent = 'Read Less';
    arrowIcon.style.transform = 'rotate(180deg)';
    aboutMobileMoreContent.classList.remove('active');
  } else {
    readMoreText.textContent = 'Read More';
    arrowIcon.style.transform = 'rotate(0deg)';
    aboutMobileMoreContent.classList.add('active');
  }
});

// Treatments Tabs
function showTab(tabId) {
  const tabItems = document.querySelectorAll('.treatments-tab-item');
  tabItems.forEach(tabItem => tabItem.classList.remove('active'));

  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

function hideTab(tabId) {
  const tabToHide = document.getElementById(tabId);
  tabToHide.classList.remove('active');
}

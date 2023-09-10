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

//Read More
function toggleText() {
  var dots = document.querySelector('.about-mobile-text-dots');
  var moreText = document.querySelectorAll('.about-mobile-text-more');
  var btnText = document.querySelector('#readMoreBtn');
  const arrowIcon = document.querySelector('.about-mobile-arrow');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    moreText.forEach(text => (text.style.display = 'none'));
    btnText.innerText = 'Read More';
    arrowIcon.style.transform = 'rotate(0deg)';
  } else {
    dots.style.display = 'none';
    moreText.forEach(text => (text.style.display = 'block'));
    btnText.innerText = 'Read Less';
    arrowIcon.style.transform = 'rotate(180deg)';
  }
}

function showTab(tabId) {
  // Hide all tab content items
  const tabItems = document.querySelectorAll('.treatments-tab-item');
  tabItems.forEach(tabItem => tabItem.classList.remove('active'));

  // Show the selected tab content
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

function hideTab(tabId) {
  // Hide the specified tab content
  const tabToHide = document.getElementById(tabId);
  tabToHide.classList.remove('active');
}

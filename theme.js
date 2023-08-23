const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDarkTheme = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDarkMode);

document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.classList.toggle('dark', isDarkTheme);
});

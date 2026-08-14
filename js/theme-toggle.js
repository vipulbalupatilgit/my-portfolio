// Light / dark theme toggle.
// Dark (the "futuristic" neon theme) is the default; the toggle removes/adds
// the `dark-mode` class on <body>, which is what every rule in
// css/futuristic.css is scoped under. Preference is remembered in
// localStorage so it persists across visits.
(function () {
  var STORAGE_KEY = 'vipul-portfolio-theme';
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function isDark() {
    return document.body.classList.contains('dark-mode');
  }

  function updateLabel() {
    var dark = isDark();
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(STORAGE_KEY, isDark() ? 'dark' : 'light');
    updateLabel();
  });

  updateLabel();
})();

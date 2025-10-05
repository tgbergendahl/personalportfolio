// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');

function setTheme(isDark){
  if(isDark){
    document.documentElement.style.setProperty('--bg', '#0f1724');
    document.documentElement.style.setProperty('--card', '#0b1220');
    document.documentElement.style.setProperty('--text', '#e6eef5');
    toggle.textContent = '☀️';
  } else {
    document.documentElement.style.setProperty('--bg', '#f6f8fb');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--text', '#0b1220');
    toggle.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

let isDark = stored ? stored === 'dark' : prefersDark;
setTheme(isDark);

toggle.addEventListener('click', () => {
  isDark = !isDark;
  setTheme(isDark);
});

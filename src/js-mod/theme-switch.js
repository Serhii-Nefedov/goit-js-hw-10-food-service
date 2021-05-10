const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputEl = document.querySelector('#theme-switch-toggle');

inputEl.addEventListener('change', positionChangeInput);

function positionChangeInput(evt) {
  if (evt.currentTarget.checked) {
    blackThemeCheckedInput();
  } else {
    lightThemeCheckedInput();
  }
}

function blackThemeCheckedInput() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputEl.checked = true;
}

function lightThemeCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputEl.checked = false;
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    lightThemeCheckedInput();
    return;
  }

  if (savedTheme === Theme.DARK) {
    blackThemeCheckedInput();
    return;
  }
}

currentTheme();

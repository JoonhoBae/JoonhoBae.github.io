const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function updateThemeLabel() {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute("title", `Switch to ${nextTheme} theme`);
}

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeLabel();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateThemeLabel();

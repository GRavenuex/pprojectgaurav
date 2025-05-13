document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Optional: Add CSS for dark mode
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background-color: #121212;
    color: #f4f4f4;
  }
  .dark-mode header,
  .dark-mode footer {
    background-color: #1e1e1e;
  }
`;
document.head.appendChild(style);
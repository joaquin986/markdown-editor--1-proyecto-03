// js/main.js

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const errorMsg = document.getElementById("error-msg");

function renderPreview() {
  const content = editor.value;

  try {
    validateInput(content);
    errorMsg.textContent = "";
    const blockHtml = applyBlocks(content);
    const finalHtml = applyFormatting(blockHtml);
    preview.innerHTML = finalHtml;

    localStorage.setItem("markdown-content", content); // GUARDADO AUTOMÁTICO

  } catch (error) {
    errorMsg.textContent = error.message;
    preview.innerHTML = "";
  }
}

editor.addEventListener("input", renderPreview);

document.getElementById("bold-btn").addEventListener("click", () => {
  const text = editor.value;
  editor.value = `**${text}**`;
  renderPreview();
});

document.getElementById("italic-btn").addEventListener("click", () => {
  const text = editor.value;
  editor.value = `*${text}*`;
  renderPreview();
});

document.getElementById("clear-btn").addEventListener("click", () => {
  editor.value = "";
  preview.innerHTML = "";
  localStorage.removeItem("markdown-content");
});

document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

// Al cargar: restaurar estado
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("markdown-content");
  if (saved) editor.value = saved;

  const isDark = localStorage.getItem("dark-mode") === "true";
  if (isDark) document.body.classList.add("dark-mode");

  renderPreview();
});

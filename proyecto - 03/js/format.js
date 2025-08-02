// js/format.js

function formatBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function formatItalic(text) {
  return text.replace(/\*(.*?)\*/g, "<em>$1</em>");
}

function formatList(text) {
  return text.replace(/^\d+\.\s(.*)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>)/gms, "<ol>$1</ol>");
}

function applyFormatting(text) {
  let formatted = formatBold(text);
  formatted = formatItalic(formatted);
  formatted = formatList(formatted);
  return formatted;
}

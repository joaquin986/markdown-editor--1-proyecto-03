// js/blocks.js

function formatHeaders(text) {
  return text
    .replace(/^######\s(.*)$/gm, "<h6>$1</h6>")
    .replace(/^#####\s(.*)$/gm, "<h5>$1</h5>")
    .replace(/^####\s(.*)$/gm, "<h4>$1</h4>")
    .replace(/^###\s(.*)$/gm, "<h3>$1</h3>")
    .replace(/^##\s(.*)$/gm, "<h2>$1</h2>")
    .replace(/^#\s(.*)$/gm, "<h1>$1</h1>");
}

function formatCodeBlocks(text) {
  return text.replace(/```([\s\S]*?)```/gm, "<pre><code>$1</code></pre>");
}

function applyBlocks(text) {
  let result = formatHeaders(text);
  result = formatCodeBlocks(result);
  return result;
}

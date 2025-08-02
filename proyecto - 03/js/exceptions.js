// js/exceptions.js

function validateInput(text) {
  if (!text.trim()) {
    throw new Error("El contenido del editor está vacío.");
  }

  const malformedHeader = /^#+[^ ]/gm;
  if (malformedHeader.test(text)) {
    throw new Error("Encabezado mal formado. Debe tener un espacio después del #.");
  }

  // Más validaciones si quieres
}

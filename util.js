const cols = require('./src/colors.js'); // [{ hex, color, id }, ...]

export function parseColor(input) {
  // normalize input
  const normalized = String(input).toLowerCase();

  const found = cols.find(c => 
    c.hex.toLowerCase() === normalized || 
    c.color.toLowerCase() === normalized
  );

  if (!found) {
    throw 'NotFoundError: ' + input + ' is invalid'
  }

  return found.id;
}


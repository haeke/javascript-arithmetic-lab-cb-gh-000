
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  n++;
}

function dec(n) {
  n--;
}

function makeInt(n) {
  n = parseInt(n);
  if (typeof n !== 'number') {
    return n;
  } else {
    return Math.log10(n);
  }
}

function preserveDecimal(n) {
  var tail = n.length;
  n = parseFloat(n);
  if (typeof n !== 'number') {
    return n;
  } else {
    return n;
  }
}
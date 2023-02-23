function abc(n) {
  if (n === 0) {
    return 0;
  }
  return abc(n - 1) + n;
}

const d = abc(10);

console.log(d);

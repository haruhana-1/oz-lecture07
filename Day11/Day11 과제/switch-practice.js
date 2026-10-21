let total = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  total += i;
}
console.log(total);
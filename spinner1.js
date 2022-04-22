let spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 100;

for (let lines in spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${lines}   `);
  }, delay);
  delay += 200;
};
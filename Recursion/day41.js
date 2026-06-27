let n = 10;

process.stdout.write(0 + " " + 1 + " ");

function itreate(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  itreate(n - 1, second, third);
}

itreate(n - 2, 0, 1);

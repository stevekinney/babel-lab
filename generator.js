function *fibonacci(n = null, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }

  let m = n !== null ? n - 1 : null;

  yield current;
  yield *fibonacci(m, next, current + next);
}
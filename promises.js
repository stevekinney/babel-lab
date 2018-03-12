const unreliablePromise = new Promise((resolve, reject) => {
  const randomChange = Math.round(Math.random());
  if (randomChange) {
    resolve(true);
  } else {
    reject(false);
  }
});
console.log('module');

const fn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve');
    }, 1000);
  });
}

async function start() {
  const result = await fn();
  console.log(result);
}

start();
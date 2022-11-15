function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("helloWorld!");
    }, 2000);
  });
}
async function helloWorld() {
  const data = await getString();
  console.log('data', data);
}
export default helloWorld;

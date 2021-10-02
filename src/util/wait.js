const wait = ms => data => new Promise(resolve => {
  setTimeout(() => resolve(data), ms);
});

export default wait;


const throttle = function (cb, delay) {
  let lastTime;

  return function (...args) {
    const now = Date.now();
    if (!lastTime) {
      cb(...args);
      lastTime = now;
    } else if (now - lastTime > delay) {
      cb(...args);
      lastTime = now;
    }
  };
};

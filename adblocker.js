(() => {
  const throttle = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    };
  };

  const callback = () => {
    const AD_DIV_SELECTORS = [
      ".commercial-unit-desktop-rhs",
      ".commercial-unit-desktop-top",
      'div[data-text-ad="1"]',
      "div[data-google-query-id]",
    ];
    let nodes = document.querySelectorAll(AD_DIV_SELECTORS.join(","));

    if (!!nodes.length) {
      nodes.forEach((n) => n.parentElement.removeChild(n));
    }
  };

  const targetNode = document.querySelector("body");
  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(throttle(callback, 500));
  observer.observe(targetNode, config);
})();

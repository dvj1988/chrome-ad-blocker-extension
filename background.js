const executeScript = chrome.tabs.executeScript;

chrome.tabs.onUpdated.addListener(() => {
  executeScript({
    file: "adblocker.js",
  });
});

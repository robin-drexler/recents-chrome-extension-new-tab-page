chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.purpose === "getTopSites") {
    chrome.topSites.get(function (sites) {
      sendResponse({sites: sites});
    });
  }

  return true;
});
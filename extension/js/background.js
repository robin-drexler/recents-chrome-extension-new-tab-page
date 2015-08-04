chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  const RECENTS_EXTENSION_ID = 'kikdapioncmdjjcjldidpcfohcibnmpc';

  if (request.purpose === "getTopSites") {
    chrome.topSites.get(function (sites) {
      sendResponse({sites: sites});
    });
  }
  
  if (request.purpose === "getRecents") {
    console.log('BEFORE');
    chrome.runtime.sendMessage(RECENTS_EXTENSION_ID, {
      action: 'getAll',
    }, function (response) {
      console.log('got response from recents', response);
      sendResponse({sites: response});
    });

  }

  return true;
});
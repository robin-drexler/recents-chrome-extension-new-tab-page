module.exports = {
  getTopSites: function () {
    return new Promise(function (resolve) {
      chrome.extension.sendMessage({purpose: "getTopSites"}, function (response) {
        var sites = response.sites;
        sites = addFaviconUrl(sites);

        resolve(sites);
      });
    });
  },
  getRecents: function () {
    console.log('GET SITES');
    return new Promise(function (resolve) {
      chrome.extension.sendMessage({purpose: "getRecents"}, function (response) {
        console.log('RESPONSE');
        var sites = response.sites || [];
        sites = addFaviconUrl(sites);
        resolve(sites);
      });
    });
  }
};

function addFaviconUrl(sites) {
  return sites.map(function (site) {
    site.faviconURL = 'chrome://favicon/' + site.url;
    return site;
  });
}
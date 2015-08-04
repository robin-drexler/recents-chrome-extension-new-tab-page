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
        var sites = response.sites;
        sites = addFaviconUrl(sites);
        resolve(sites);
      });
    });
  }
};

function addFaviconUrl(sites) {
  return sites.map(function (site) {
    var faviconDomain = site.url.split('/')[2];
    site.faviconURL = 'http://www.google.com/s2/favicons?domain=' + faviconDomain;

    return site;
  });
}

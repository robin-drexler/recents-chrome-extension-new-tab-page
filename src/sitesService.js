module.exports = {
  getSites: function () {
    return new Promise(function (resolve) {
      chrome.extension.sendMessage({purpose: "getTopSites"}, function (response) {
        var sites = response.sites;

        sites.map(function (site) {
          site.faviconURL = site.url.split('/')[2];
        });

        resolve(sites);
      });
    });

  }
};
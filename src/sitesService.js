module.exports = {
  getSites: function () {
    return new Promise(function (resolve) {
      chrome.extension.sendMessage({purpose: "getTopSites"}, function (response) {
        var sites = response.sites;

        sites.map(function (site) {
          var faviconDomain = site.url.split('/')[2];
          site.faviconURL = 'http://www.google.com/s2/favicons?domain=' + faviconDomain;
        });

        resolve(sites);
      });
    });

  }
};
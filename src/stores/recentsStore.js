var Reflux = require('reflux');
var SiteActions = require('../siteActions');

var RecentsStore = Reflux.createStore({
  init: function() {
    this.listenTo(SiteActions.loadRecents, 'onLoadRecents');
  },
  onLoadRecents: function() {
    chrome.extension.sendMessage({purpose: "getRecents"}, function (response) {
      console.log('RESPONSE');
      var sites = response.sites || [];
      sites = addFaviconUrl(sites);
      this.trigger(sites);
    }.bind(this));
  }
});

module.exports = RecentsStore;

function addFaviconUrl(sites) {
  return sites.map(function (site) {
    site.faviconURL = 'chrome://favicon/' + site.url;
    return site;
  });
}

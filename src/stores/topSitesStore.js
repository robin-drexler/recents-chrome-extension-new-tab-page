var Reflux = require('reflux');
var SiteActions = require('../siteActions');

module.exports = Reflux.createStore({
  init: function() {
    this.listenTo(SiteActions.loadTopSites, 'onLoadTopSites');
  },
  onLoadTopSites: function() {
    chrome.extension.sendMessage({purpose: "getTopSites"}, function (response) {
      var sites = response.sites;
      this.trigger(sites);
    }.bind(this));

  }
});



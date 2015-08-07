var Reflux = require('reflux');
var SiteActions = require('../siteActions');

var RecentsStore = Reflux.createStore({
  init: function() {
    this.listenTo(SiteActions.loadRecents, 'onLoadRecents');
    this.listenTo(SiteActions.removeRecent, 'onRemoveRecent');
  },
  onLoadRecents: function() {
    chrome.extension.sendMessage({purpose: "getRecents"}, function (response) {
      console.log('RESPONSE');
      var sites = response.sites || [];
      this.trigger(sites);
    }.bind(this));
  },
  onRemoveRecent: function (recentId) {
    chrome.extension.sendMessage({purpose: "removeRecent", id: recentId}, function (response) {
      this.onLoadRecents();
    }.bind(this));
  }
});

module.exports = RecentsStore;
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
      this.trigger(sites);
    }.bind(this));
  }
});

module.exports = RecentsStore;
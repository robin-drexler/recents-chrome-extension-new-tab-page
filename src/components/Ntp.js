var React = require('react');
var Reflux = require('reflux');

var SitesContainer = require('../components/SitesContainer');
var RecentsStore = require('../stores/recentsStore');
var TopSiteStore = require('../stores/topSitesStore');
var SitesActions = require('../siteActions');

module.exports = React.createClass({
  mixins: [
    Reflux.connect(RecentsStore, 'recents'),
    Reflux.connect(TopSiteStore, 'topSites')
  ],
  getInitialState: function () {
    var placeHolderSites = new Array(9).join(' ').split(' ').map(() => { return {}});
    return {
      topSites: placeHolderSites,
      recents: placeHolderSites
    }
  },
  componentDidMount: function () {
    SitesActions.loadRecents();
    SitesActions.loadTopSites();
  },
  render: function() {
    var recents = this.state.recents || [];

    return (
      <div>
        <h2>Top sites</h2>
        <SitesContainer sites={this.state.topSites} limit={9}/>
        {
          (() => {
            if (recents.length > 0) {
              return (
                <div>

                  <h2>Recents</h2>
                  <SitesContainer sites={this.state.recents} limit={9}/>
                </div>
              )
            } else {
              return (
                <h2>OMG you totally need to install the Recents extension!</h2>
              )
            }
          })()
        }
      </div>
    );
  }
});
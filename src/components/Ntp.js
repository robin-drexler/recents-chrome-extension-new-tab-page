var React = require('../React');
var sitesService = require('../sitesService');
var SitesContainer = require('../components/SitesContainer');

module.exports = React.createClass({
  getInitialState: function () {
    var placeHolderSites = new Array(8).join(' ').split(' ').map(() => { return {}});
    return {
      topSites: placeHolderSites,
      recents: placeHolderSites
    }
  },
  componentDidMount: function () {

    var recentPromise = sitesService.getRecents();
    var topSitesPromise = sitesService.getTopSites();

    Promise.all([recentPromise, topSitesPromise]).then(function (sites) {
      this.setState({topSites: sites[0], recents: sites[1]});
    }.bind(this))

  },
  render: function() {
    return (
      <div>
        <h2>Recents</h2>
        <SitesContainer sites={this.state.recents} limit={8}/>

        <h2>Top sites</h2>
        <SitesContainer sites={this.state.topSites} limit={8}/>
      </div>
    );
  }
});
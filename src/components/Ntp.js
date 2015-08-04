var React = require('../React');
var sitesService = require('../sitesService');
var SitesContainer = require('../components/SitesContainer');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      topSites: [],
      recents: [],
    }
  },
  componentDidMount: function () {
    sitesService.getRecents().then(function (sites) {
      console.log(sites);
      this.setState({
        recents: sites
      })
    }.bind(this));

    sitesService.getTopSites().then(function (sites) {
      this.setState({
        topSites: sites
      })
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <h2>Top sites</h2>
        <SitesContainer sites={this.state.topSites} limit={8}/>

        <h2>Recents</h2>
        <SitesContainer sites={this.state.recents} limit={8}/>
      </div>
    );
  }
});
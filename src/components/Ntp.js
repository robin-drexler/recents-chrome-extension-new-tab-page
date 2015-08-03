var React = require('../React');
var sitesService = require('../sitesService');
var SitesContainer = require('../components/SitesContainer');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      topSites: []
    }
  },
  componentDidMount: function () {
    sitesService.getSites().then(function (sites) {
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
      </div>
    );
  }
});
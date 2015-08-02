var React = require('../React');
var Site = require('./Site');
var sitesService = require('../sitesService');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topSites: []
    }
  },
  componentDidMount: function() {
    sitesService.getSites().then(function (sites) {
      this.setState({
        topSites: sites
      })
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        {this.state.topSites.map(function (site) {
          return <Site title={site.title}/>
        })}
      </div>
    );
  }
});
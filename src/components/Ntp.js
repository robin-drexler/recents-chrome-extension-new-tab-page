var React = require('../react');
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
      this.setState({topSites: sites[1], recents: sites[0]});
    }.bind(this))

  },
  render: function() {
    var recents = this.state.recents || [];

    return (
      <div>
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

        <h2>Top sites</h2>
        <SitesContainer sites={this.state.topSites} limit={9}/>

      </div>
    );
  }
});
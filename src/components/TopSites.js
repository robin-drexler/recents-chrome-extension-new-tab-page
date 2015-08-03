var React = require('../React');
var Site = require('./Site');
var sitesService = require('../sitesService');
var eachSlice = require('../eachSlice');


module.exports = React.createClass({
  getInitialState: function () {
    return {
      rows: []
    }
  },
  componentDidMount: function () {

    sitesService.getSites().then(function (sites) {
      const ROW_ITEM_COUNT = 4;
      var rows = eachSlice(sites, ROW_ITEM_COUNT);

      this.setState({
        rows: rows
      })
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        {this.state.rows.map(function (row) {
          return (
            <div className="sites-row">
              {row.map(function (site) {
                return <Site data={site}/>
              })}
            </div>
          );
        })}

      </div>
    );
  }
});
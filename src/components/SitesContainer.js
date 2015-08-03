var React = require('../React');
var Site = require('./Site');
var eachSlice = require('../eachSlice');


module.exports = React.createClass({
  render: function () {
    const ROW_ITEM_COUNT = 4;
    var sites = this.props.sites || [];
    sites = sites.slice(0, this.props.limit);
    var rows = eachSlice(sites, ROW_ITEM_COUNT);

    return (
      <div>
        {rows.map(function (row) {
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
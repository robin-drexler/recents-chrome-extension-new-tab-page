var React = require('../react');
var Site = require('./Site');

module.exports = React.createClass({
  render: function () {
    var sites = this.props.sites || [];
    sites = sites.slice(0, this.props.limit);

    console.log(Site);

    return (
      <div className="sites-row">
        {sites.map(function (site) {
          return (
            <Site data={site} />
          );
        })}
      </div>
    );
  }
});
var React = require('react');

module.exports = React.createClass({
  render: function () {
    var sites = this.props.sites || [];
    sites = sites.slice(0, this.props.limit);

    return (
      <div className="sites-row">
        {sites.map(function (site) {
          return (
            // XXX `site` may be ambiguous
            <this.props.site data={site} />
          );
        }.bind(this))}
      </div>
    );
  }
});
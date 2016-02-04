import React from 'react';

module.exports = React.createClass({
  render: function () {
    var sites = this.props.sites || [];
    var filter = this.props.filter || '';
    filter = filter.toLowerCase();

    if (filter) {
      sites = sites.filter(function (site) {
        return site.title.toLowerCase().includes(filter)
          || site.url.includes(filter);
      });
    }

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
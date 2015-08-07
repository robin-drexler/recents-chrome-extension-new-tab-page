var React = require('react');

module.exports = React.createClass({
  render: function () {
    var title = this.props.data.title || "\u00a0";
    var faviconUrl = `chrome://favicon/${this.props.data.url}`;

    return (
      <a className="site site-link" href={this.props.data.url} title={this.props.data.title}>
        <img className="site-favicon" src={faviconUrl} />
        <span className="site-title">{title}</span>
      </a>
    );
  }
});
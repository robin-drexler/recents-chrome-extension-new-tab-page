var React = require('react');

module.exports = React.createClass({
  render: function () {
    var title = this.props.data.title || "\u00a0";

    return (
      <a className="site site-link" href={this.props.data.url} title={this.props.data.title}>
        <img className="site-favicon" src={this.props.data.faviconURL} />
        <span className="site-title">{title}</span>
      </a>
    );
  }
});
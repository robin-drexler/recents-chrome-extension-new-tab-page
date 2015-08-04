var React = require('../React');
module.exports = React.createClass({
  render: function () {
    return (
      <a className="site site-link" href={this.props.data.url} title={this.props.data.title}>
        <img className="site-favicon" src={this.props.data.faviconURL}/>
        <span className="site-title">{this.props.data.title}</span>
      </a>
    );
  }
});
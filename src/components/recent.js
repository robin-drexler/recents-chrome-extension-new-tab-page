var React = require('react');
var SiteActions = require('../siteActions');

module.exports = React.createClass({
  indicateRemovalIntend: function () {
    this.setState({
      isRemovalIntended: true
    });
  },
  removeRemovalIntend: function () {
    this.setState({
      isRemovalIntended: false
    });
  },
  removeRecent: function (e) {
    SiteActions.removeRecent(this.props.data.id);
    e.preventDefault();
  },
  getInitialState: function () {
    return {
      isRemovalIntended: false
    }
  },
  render: function () {
    var title = this.props.data.title || "\u00a0";
    var faviconUrl = `chrome://favicon/${this.props.data.url}`;
    var isRemovalIntendedClassString = '';

    if (this.state.isRemovalIntended) {
      isRemovalIntendedClassString = 'site-removal-intended'
    }

    return (
      <a className={"site site-link " + isRemovalIntendedClassString} href={this.props.data.url} title={this.props.data.title}>
        <div title="remove site" className="site-remove" onClick={this.removeRecent} onMouseOver={this.indicateRemovalIntend} onMouseOut={this.removeRemovalIntend}></div>
        <img className="site-favicon" src={faviconUrl} />
        <span className="site-title">{title}</span>
      </a>
    );
  }
});
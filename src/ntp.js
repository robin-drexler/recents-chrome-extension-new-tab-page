var sitesService = require('./sitesService');
var React = require('./React');
sitesService.getSites();

var TopSites = React.createClass({
  render: function() {
    return (
      <Site title="Hello Waaaaaald"/>
    );
  }
});

// tutorial1.js
var Site = React.createClass({
  render: function() {
    return (
      <div className="site">
        {this.props.title}
      </div>
    );
  }
});

React.render(
  <TopSites />,
  document.getElementById('content')
);

var sitesService = require('./sitesService');
var React = require('./React');
var TopSites = require('./components/TopSites');

React.render(
  <TopSites />,
  document.getElementById('content')
);

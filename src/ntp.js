var sitesService = require('./sitesService');
var React = require('./React');
var TopSites = require('./components/TopSites');
var eachSlice = require('./eachSlice');

React.render(
  <TopSites />,
  document.getElementById('content')
);


console.log(eachSlice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));


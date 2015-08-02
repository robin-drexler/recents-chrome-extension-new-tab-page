var React = require('../React');
var Site = require('./Site');

module.exports = React.createClass({
  getInitialState: function() {

    return {
      topSites: []
    }
  },
  componentDidMount: function() {
    this.setState({
      topSites: [
        {
          title: 'Jimdo, #funworks'
        }
      ]
    })
  },
  render: function() {
    return (
      <div>
        {this.state.topSites.map(function (site) {
          return <Site title={site.title}/>
        })}
      </div>
    );
  }
});
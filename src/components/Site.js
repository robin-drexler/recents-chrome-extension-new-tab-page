var React = require('../React');
module.exports = React.createClass({
  render: function() {
    return (
      <div className="site">
        {this.props.title}
      </div>
    );
  }
});
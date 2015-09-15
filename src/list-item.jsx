var React = require('react');
var Firebase = require('firebase');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: this.props.item.text
    }
  },
  render: function () {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" />
        </span>
        <input
          value={this.state.text}
          type="text"
          className="form-control"
          />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button">
            Delete
          </button>
        </span>
      </div>
    );
  }
});

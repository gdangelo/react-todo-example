var React = require('react');
var Firebase = require('firebase');

var rootUrl = 'https://torrid-inferno-1049.firebaseio.com/items/';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: this.props.item.text,
      done: this.props.item.done
    }
  },
  componentWillMount: function () {
    this.fb = new Firebase(rootUrl + this.props.item.key);
  },
  render: function () {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}
            />
        </span>
        <input
          disabled={this.state.done}
          value={this.state.text}
          type="text"
          className="form-control"
          />
        <span className="input-group-btn">
          <button
            onClick={this.handleDeleteClick}
            className="btn btn-default"
            type="button">
            Delete
          </button>
        </span>
      </div>
    );
  },
  handleDoneChange: function (event) {
    checked = {done: event.target.checked};
    this.setState(checked);
    this.fb.update(checked);
  },
  handleDeleteClick: function () {
    this.fb.remove();
  }
});

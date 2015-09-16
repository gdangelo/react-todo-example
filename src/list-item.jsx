var React = require('react');
var Firebase = require('firebase');

var rootUrl = 'https://torrid-inferno-1049.firebaseio.com/items/';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
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
          onChange={this.handleTextChange}
          type="text"
          className="form-control"
          />
        <span className="input-group-btn">
          {this.changesButtons()}
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
  changesButtons: function () {
    if(this.state.textChanged){
      return [
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default"
          type="button">
          Undo
        </button>,
        <button
          onClick={this.handleSaveClick}
          className="btn btn-default"
          type="button">
          Save
        </button>
      ];
    } else {
      return null;
    }
  },
  handleTextChange: function (event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  },
  handleDoneChange: function (event) {
    checked = {done: event.target.checked};
    this.setState(checked);
    this.fb.update(checked);
  },
  handleSaveClick: function () {
    this.fb.update({
      text: this.state.text
    });
    this.setState({
      textChanged: false
    });
  },
  handleUndoClick: function () {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },
  handleDeleteClick: function () {
    this.fb.remove();
  }
});

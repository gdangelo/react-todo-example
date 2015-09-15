var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://torrid-inferno-1049.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function () {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
  },
  render: function () {
    console.log(this.state);
    return (
      <h1>Hello, React!</h1>
    )
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));

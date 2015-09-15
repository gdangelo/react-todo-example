var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');

var rootUrl = 'https://torrid-inferno-1049.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function () {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
  },
  render: function () {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">React Todo Example</h2>
          <Header itemsStore={this.firebaseRefs.items} />
        </div>
      </div>
    )
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));

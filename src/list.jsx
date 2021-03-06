var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  },
  renderList: function () {
    if(this.props.items['.value'] === null){
      return <h4>
        Add a todo to get started
      </h4>
    } else {
      var children = [];

      for(key in this.props.items) {
        item = this.props.items[key];
        item.key = key;

        if(this.props.items[key].text){
          children.push(
            <ListItem
              key={key}
              item={item}
            />
          );
        }
      }

      return children;
    }
  }
});

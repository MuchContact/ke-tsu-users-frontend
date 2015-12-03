import React, { Component, PropTypes } from 'react';

export var TodoItem = React.createClass({
  render() {
    return (
        <li style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'cursor'
        }} onClick={this.props.onClick}>
          {this.props.text}
        </li>
    );
  }
});

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export var TodoList = React.createClass({
  render() {
    return (
        <ul>
          {this.props.todos.map((todo, index) =>
              <TodoItem {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)}/>
          )}
        </ul>
    );
  }
});

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export var AddTodo = React.createClass({
  render() {
    return (
        <div>
          <input type="text" ref="input"/>
          <button onClick={this.handleClick}>Add</button>
        </div>
    );
  },

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    if (text.length) {
      this.props.onAddClick(text);
    }
    node.value = '';
  }
});

AddTodo.PropTypes = {
  onAddClick: PropTypes.func.isRequired
};

export var Footer = React.createClass({
  renderFilter(filter, name) {
    if (filter == this.props.filterType) {
      return name;
    } else {
      return (
          <a href="#" onClick={e => {
            e.preventDefault();
            this.props.onFilterChange(filter);
          }}>{name}</a>
      )
    }
  },
  render() {
    console.log(this.props.filterType);
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter("SHOW_ALL", "ALL")}
        {', '}
        {this.renderFilter("SHOW_COMPLETED", "COMPLETED")}
        {', '}
        {this.renderFilter("SHOW_ACTIVE", "ACTIVE")}
      </p>
    );
  }
});

Footer.PropTypes = {
  filterType: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]),
  onFilterChange: PropTypes.func.isRequired
};
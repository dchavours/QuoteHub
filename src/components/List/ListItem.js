import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style.scss';

class ListItem extends Component {
  completeClick = completeTodoId => {
    const { completeToDo } = this.props;
    completeToDo(completeTodoId);
  };

  render() {
    const { todo } = this.props;

    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item black">
        <h4>
          {todo.title} <br />
          {todo.company}
          <span
            // onClick={() => this.completeClick(todoId)}
            className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
          >
            <i className="large material-icons">Done</i>
          </span>
        </h4>
        <p>{todo.message}</p>

        {/* Item */}
      </div>
    );
  }
}

export default connect(null)(ListItem);

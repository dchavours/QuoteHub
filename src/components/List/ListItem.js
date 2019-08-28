import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/todo/actions';

import '../style.css';

const { completeToDoRequest } = actions;

class ListItem extends Component {
  completeClick = () => {
    const { todoId, completeToDo } = this.props;

    completeToDo(todoId);
  };

  render() {
    const { todo } = this.props;

    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item black">
        <h4>
          {todo.title} <br />
          {todo.company}
          <span
            className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
            role="button"
            tabIndex="0"
            onClick={this.completeClick}
            onKeyPress={() => {}}
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

const mapDispatchToProps = {
  completeToDo: completeToDoRequest,
}

export default connect(null, mapDispatchToProps)(ListItem);

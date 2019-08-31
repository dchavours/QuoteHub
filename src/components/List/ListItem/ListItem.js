import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/todo/actions';

import '../ListItem/ListItem.css';

const { completeToDoRequest } = actions;

class ListItem extends Component {
  completeClick = () => {
    const { todoId, completeToDo } = this.props;

    completeToDo(todoId);
  };

  render() {
    const { todo } = this.props;

    return (
      // https://materializecss.com/grid.html
      // col s10 = This div is 10 columns wide.
      // 
      //
      //
      //



      <div key="toDoName" className="to-do-list-item">
        <h4>
          {todo.title} <br />
          {todo.company}
          <span
            className="done-button complete-todo-item blue-text btn-custom"
            role="button"
            tabIndex="0"
            onClick={this.completeClick}
            onKeyPress={() => {}}
          >
           
            <i className="done-icon">Done</i>
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

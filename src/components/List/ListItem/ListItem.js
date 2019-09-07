import React, { Component } from 'react';
import { connect } from 'react-redux';
import listActions from '../../../redux/todo/actions';
import ListModal from '../ListModal/ListModal';
import modalActions from '../../../redux/modal/actions';




// Duck file. 
// import { actions } from '../../ducks/modal.js';

//End duck file. 


import '../ListItem/ListItem.css';

const { completeToDoRequest, openModalRequest } = listActions;
const { showModalRequest } = modalActions;

class ListItem extends Component {

    clickModal = () => {
      const { showModalRequest, showModalFunction } = this.props; 

      showModalFunction(showModalRequest);


    }

    inspectModal = () => {
    console.log(5);
    

  }


  completeClick = () => {
    const { todoId, completeToDo } = this.props;

    completeToDo(todoId);
  };

  render() {
    const { todo } = this.props;

    return (
      <div key="toDoName" className="to-do-list-item" onClick={this.inspectModal}>

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
		  <br />
		  <ListModal/>

        </h4>
        <p>{todo.message}</p>

      </div>
    );
  }
}

const mapDispatchToProps = {
  completeToDo: completeToDoRequest,
  showModal: showModalRequest

}

export default connect(null, mapDispatchToProps)(ListItem);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import listActions from '../../../redux/todo/actions';
// import ListModal from '../ListModal/ListModal';
import modalActions from '../../../redux/modal/actions';
import { show } from 'redux-modal'
import Button from "../ListModal/ButtonModal/Button/Button";

import ModalDownload from "../../../components/downloads/Modal";



import '../ListItem/ListItem.css';

const { completeToDoRequest, openModalRequest } = listActions;
const { showModalRequest } = modalActions;

class ListItem extends Component {

  handleOpen = name => () => {
    this.props.show(name, this.props.todo);
  };


    inspectModal = () => {
    console.log(5);   
  }


  completeClick = () => {
    const { todoId, completeToDo } = this.props;

    completeToDo(todoId);
  };

 


  render() {
    const { todo } = this.props;
    console.log(todo.title);

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

        <Button text="Open Modal" key={this.todo} onClick={this.handleOpen("download")}/>



        </h4>
        <p>{todo.message}</p>
        <ModalDownload name="name">
            {todo.title}
            {49}
          </ModalDownload>

      </div>

    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    todos: state.todos

  }
}



const mapDispatchToProps = {
  completeToDo: completeToDoRequest,
  showModal: showModalRequest,
  show


}




export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ListItem);
















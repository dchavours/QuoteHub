import React, { Component } from 'react';
import { connect } from 'react-redux';
import listActions from '../../../redux/todo/actions';
// import ListModal from '../ListModal/ListModal';
import modalActions from '../../../redux/modal/actions';
import { show } from 'redux-modal'
import Button from "../ListModal/ButtonModal/Button/Button";



import '../ListItem/ListItem.css';

const { completeToDoRequest, openModalRequest } = listActions;
const { showModalRequest } = modalActions;

class ListItem extends Component {

  handleOpen = name => () => {
    this.props.show(name);
  };


    // clickModal = () => {
    //   const { showModalRequest, showModalFunction } = this.props; 
    //   showModalFunction(showModalRequest);
    // }


    inspectModal = () => {
    console.log(5);   
  }


  completeClick = () => {
    const { todoId, completeToDo } = this.props;

    completeToDo(todoId);
  };

  createUniqueClassName = () => {
    
    // This function will create a class that says {todo.math} and then Modal.js will loop through the DOM
    // for where it's at and then go off that. 
      // <div className="identifier" key={todo.math}></div>

    }


  render() {
    const { todo } = this.props;

    return (

      // <link href="#" onClick={function(event){ func1(event); func2();}}>Trigger here</link>


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
		  {/* <h3 key="download"> */}
        {/* <a onClick={this.handleOpen("download")}>touch</a></h3> */}
        <Button text="Open Modal" key={this.todo} onClick={this.handleOpen("download")}/>



        </h4>
        <p>{todo.message}</p>

      </div>
    );
  }
}

const mapDispatchToProps = {
  completeToDo: completeToDoRequest,
  showModal: showModalRequest,
  show


}




export default connect(
  null, 
  mapDispatchToProps
)(ListItem);



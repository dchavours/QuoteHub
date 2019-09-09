import React, { Component } from 'react';
import { connect } from 'react-redux';
import listActions from '../../../redux/todo/actions';
// import ListModal from '../ListModal/ListModal';
import modalActions from '../../../redux/modal/actions';
import { show } from 'redux-modal'



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
		  <h3 key="download"><a onClick={this.handleOpen("download")}>touch</a></h3>

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

// const mapStateToProps = state => ({
//   modal: state.ModalReducer.modalProps

// });




export default connect(
  null, 
  mapDispatchToProps
)(ListItem);




// export default connect(
//   null,
//   dispatch => bindActionCreators({ show }, dispatch)
// )(BaseHeaderMenu);


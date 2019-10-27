import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { PushNotifications } from "../../PushNotifications/PushNotifications";
import ListItem from '../ListItem/ListItem';
import actions from '../../../redux/todo/actions';
import '../List/List.css';
// import { logout } from '../../../redux/auth/reducers';



// import logout action?

const { addToDoRequest } = actions;



class List extends Component {
  state = {
    showForm: false,
    formValue: '',
  };

  inputChange = event => {
    this.setState({ formValue: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    const { formValue } = this.state;
    const { addToDoRequest } = this.props;

    addToDoRequest({ title: formValue });
    this.setState({ formValue: '' });
  };


  renderLogout = (logout) => {
        
      return (
        <button classname="renderLogout" onClick={logout}>Logout</button>
      )
      
    

  } 


  renderForm = () => {
    const { showForm, formValue } = this.state;
    return showForm === true ? (
      <div id="todo-add-form" className="col s10 offset-s1">
        <form onSubmit={this.formSubmit}>
          <div className="input-field">
            <label id="formLabel" htmlFor="toDoNext">
              What Next?
            </label>
            <input
              id="toDoNext"
              value={formValue}
              onChange={this.inputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    ) : (
      ''
    );
  };




  renderToDo() {
    const { todos } = this.props;
    const data = _.map(todos, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(data)) {
      return data;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className="to-do-list-container">
        <div className='inputLogout' >{this.renderLogout()}</div>
        
                  <PushNotifications/>

        <div className="row">{this.renderForm()}</div>
        <div className="row">{this.renderToDo()}</div>
        <div className="fixed-action-btn">
          <button
            type="button"
            onClick={() => this.setState({ showForm: !showForm })}
            className="btn-floating btn-large black darken-4"
          >
            {showForm ? (
              <i className="large material-icons">-</i>
            ) : (
              <i className="large material-icons">+</i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  // addToDo gets dispatched to the store.
 addToDoRequest,
//  logout
};

export default connect(
  null,
  mapDispatchToProps,
)(List);

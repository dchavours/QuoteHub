import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListItem from './ListItem';
import actions from '../../redux/todo/actions';
import '../style.css';

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
    const { addToDo } = this.props;

    addToDo({ title: formValue });
    this.setState({ formValue: '' });
  };

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
  addToDo: addToDoRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(List);

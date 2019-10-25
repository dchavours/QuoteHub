// This is written with thunk and firestore.
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'

import { login, getUser } from '../../redux/reduxThunks/actions/userActions';

import SimpleBox from "../SignInComponents/SimpleBox";
import InputField from "../SignInComponents/InputField";
import FooterFormButton from "../SignInComponents/FooterFormButton";
import ErrorAlert from "../SignInComponents/ErrorAlert";


export class SignIn extends Component {
  // Apparently this is not a Redux controlled form.
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.push('/');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err,
      });
    });
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red',
    };
    return (
      <form
        onSubmit={event => {
          this.submitLogin(event);
        }}
      >
        <div>
          <InputField
            id="email"
            type="text"
            label="Email"
            inputAction={event => this.setState({ email: event.target.value })}
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            inputAction={event =>
              this.setState({ password: event.target.value })
            }
            style={this.state.error ? errStyle : null}
          />
          {this.state.error && (
            <ErrorAlert>Your username/password is incorrect</ErrorAlert>
          )}
          <FooterFormButton
            submitLabel="Sign in"
            otherLabel="Create Account"
            goToLink="/CreateAccount"
            {...this.props}
          />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <SimpleBox title="sign in" body={this.renderBody()} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.user}
}

export default connect(
  mapStateToProps,
  {login, getUser}
)(SignIn)
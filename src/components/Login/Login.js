import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Grid, Message, Segment } from 'semantic-ui-react';
import { login } from '../../redux/auth/reducers';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleChange = (evt, { name, value }) =>
    this.setState({
      [name]: value
    });

  render() {
    const { isAuthenticated, error } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Grid columns="2" centered stackable>
        <Grid.Column>
          <Segment clearing>
            {error && <Message error>{error.message}</Message>}

            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                type="email"
                id="email"
                name="email"
                required
                label="Email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <Form.Input
                type="password"
                id="password"
                name="password"
                required
                label="Password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <span className="tiny gray">Try: email@email.com / Password</span>
              <Form.Button
                primary
                type="submit"
                content="Login"
                floated="right"
              />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated, error } }) => ({
  isAuthenticated,
  error
});

export default connect(mapStateToProps, { login })(LoginPage);

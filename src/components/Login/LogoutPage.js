import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { logout, getUser, isAuthenticated } from '../../redux/auth/reducers';

const UserInfo = ({ isAuthenticated, user, logout }) => {
  const trigger = (
    <span>
      <Image /> {user.email}
    </span>
  );

//   return isAuthenticated ? (
    return(
    <Menu.Item position="right">
      <Dropdown trigger={trigger} pointing="top right">
        <Dropdown.Menu>
          <Dropdown.Item text="Profile" icon="user" />
          <Dropdown.Item text="Logout" icon="sign out" onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps, {
  logout
})(UserInfo);

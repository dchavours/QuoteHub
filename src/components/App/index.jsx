import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalExample from '../../components/ModalExample';
// import { Button } from 'chramework';
import  Button  from '../Button/Button';


import { actions } from '../../ducks/modal.js';

import 'chramework/dist/main.css';
import './styles.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<br />
				<br />
				<br />

				<div>
					<Button
						onClick={() => {
							this.props.openModal({

								modalType: ModalExample,
								modalProps: {
									exit: [
										{
											text: 'Text',
											intent: 'success',
											onClick: () => {
											this.props.closeModal();
											}
										}
									],
									title: 'Title',
									text: 'Text',
									subTitle: 'Subtitle',
									hasClose: false,
									buttons: [
										{
											text: 'Text',
											intent: 'success',
											onClick: () => {
												alert('Ок =)');
												this.props.closeModal();
											}
										},
										{
											text: 'Text',
											onClick: () => {
												alert('Nooo =(');
												this.props.closeModal();
											}
										}
									]
								}
							});
						}}
						text="Open Modal"
					/>

				</div>












			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		openModal: modalParams => dispatch(actions.openModal(modalParams)),
		closeModal: () => dispatch(actions.closeModal())
	};
};
export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';


import { actions } from '../../ducks/modal.js';

import './styles.css';

class ModalContainer extends Component {
	// Initiates the HIDE_MODAL type. 
	closeModal = () => {
		const { closeModal = () => {} } = this.props;
		closeModal();
		
	};

	render() {
		const { modalType, modalProps: { hasClose = true } } = this.props;

		const SpecificModal = modalType;

		return (
			<div>
			
				{modalType && (
					<div classNames="ModalContainer" timeout={150}>
						<div className="ModalContainer">
							<div
								className="ModalContainer__overlay"
								onClick={this.closeModal}
							/>
							<div className="ModalContainer__content">
								{hasClose && (
									<button
										className="ModalContainer__close"
										onClick={this.closeModal}
									>
										×
									</button>
								)}
								<div className="ModalContainer__inner">
									<SpecificModal {...this.props} />
								</div>
							</div>
						</div>
					</div>
				)}
			
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ ...state.modal });
const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(actions.closeModal())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

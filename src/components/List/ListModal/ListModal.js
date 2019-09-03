import React, { Component } from 'react'
import Button from './ButtonModal/Button/Button';
import { actions } from '../../../redux/modal/modal';
import ModalExample from '../ListModal/ButtonModal/ModalExample';
import { connect } from 'react-redux';





export class ListModal extends Component {
  render() {
    return (
      <div>
        
			<Button
						onClick={() => {
							this.props.openModal({

								modalType: ModalExample,
								modalProps: {
									exit: [
										{
											text: '08a09dsf*as0df8',
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
    )
  }
}



const mapDispatchToProps = dispatch => {
	return {
		openModal: modalParams => dispatch(actions.openModal(modalParams)),
		closeModal: () => dispatch(actions.closeModal())
	};
};
export default connect(null, mapDispatchToProps)(ListModal);

















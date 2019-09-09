import React, { Component } from 'react'
import Button from './ButtonModal/Button/Button';
import  modalActions from '../../../redux/modal/actions';
import ModalExample from '../ListModal/ButtonModal/ModalExample';
import { connect } from 'react-redux';
import { Modal } from "antd";
import { connectModal } from "redux-modal";




export class ListModal extends Component {
	// Checking PropTypes above the Render method. 
	static propTypes = {
		handleHide: PropTypes.func.isRequired
	  };

  render() {
	const { show, handleHide } = this.props;

    return (
		<Modal
        width={1020}
        title="Download Options"
        visible={show}
        onOk={handleHide}
        onCancel={handleHide}
        footer={null}
      />
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

{/* 

const mapDispatchToProps = dispatch => {
	return {
		openModal: modalParams => dispatch(modalActions.openModal(modalParams)),
		closeModal: () => dispatch(modalActions.closeModal())
	};
};
export default connect(null, mapDispatchToProps)(ListModal); */}

export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);

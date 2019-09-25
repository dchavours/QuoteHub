import React, { Component } from 'react'
import Button from './ButtonModal/Button/Button';
import  modalActions from '../../../redux/modal/actions';
import ModalExample from '../ListModal/ButtonModal/ModalExample';
import { connect } from 'react-redux';
import { Modal } from "antd";
import { connectModal } from "redux-modal";
import './styles.css';




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
     
    )
  }
}



export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);

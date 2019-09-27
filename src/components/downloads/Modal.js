import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { connectModal } from "redux-modal";
import './styles.css';

class ModalDownload extends Component {
   static propTypes = {
    handleHide: PropTypes.func.isRequired
  };



  

  render() {
    const { show, handleHide, todo} = this.props;
    // console.log(this.props);
    console.log(this.store);



    return (
      <Modal
        width={1020}
        title="Download Options"
        visible={show}
        onOk={handleHide}
        onCancel={handleHide}
        footer={null}
        data={this.props}
      >  
        <br></br>
        Put Axios and<br></br> Firebase code here.
        {/* <p>{postList}</p> */}
        {/* <h1>{this.props.kLkd}</h1> */}
        <h2>{this.props.children}</h2>
        <br></br>

      </Modal>
    );
  }
}

export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);

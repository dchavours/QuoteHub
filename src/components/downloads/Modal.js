import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { connectModal } from "redux-modal";

class ModalDownload extends Component {
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
      >
        <h2>Free Version (Demo)</h2>
        <ul className="button-list">
          <li className="button-list__item">
            <a
              href="https://cdn.discordapp.com/attachments/530681928437858305/530692840813232138/Creation_Free_version.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--solid button--highlight"
            >
              <span className="button__label">Tencent Gaming Buddy</span>
            </a>
          </li>
        </ul>
        <h2>Full Version</h2>
        <ul className="button-list">
          <li className="button-list__item">
            <a
              href="https://cdn.discordapp.com/attachments/530502378240212994/530692607744016394/Creation_12-31-2018.rar"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--solid button--tencent"
            >
              <span className="button__label">Tencent Gaming Buddy</span>
            </a>
          </li>
          <li className="button-list__item">
            <a
              href="https://mega.nz/#F!aCgyXYaJ!N1KwVYByXKON7IZl5BskKg!mOBEHaKS"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--solid button--second"
            >
              <span className="button__label">LD Player</span>
            </a>
          </li>
        </ul>
      </Modal>
    );
  }
}

export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);

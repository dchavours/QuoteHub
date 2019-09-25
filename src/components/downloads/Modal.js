import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { connectModal } from "redux-modal";
import './styles.css';
import axios from 'axios';

class ModalDownload extends Component {
  static propTypes = {
    handleHide: PropTypes.func.isRequired
  };

  state = {
    messages: [ ]
  }


   

componentDidMount() {
   axios.get('https://quotehub-example.firebaseio.com/messages.json')
                .then(res => {
                console.log(res);
            //  this.setState({
            //  messages: res.data.slice(1)
            // })
          })
  }

  render() {

    const { show, handleHide } = this.props;
    const { messages } = this.state; 
     const messageList = messages.length ? (
       messages.map(message => {
         return (
           <div className="post-card" key={message.id}>
              <div className="card-content"></div>
           </div>
         )
         

       }
       )
     ) : (
       <div className="center">No posts yet</div>
     ) 



    return (
      <Modal
        width={1020}
        title="Download Options"
        visible={show}
        onOk={handleHide}
        onCancel={handleHide}
        footer={null}
      >
        {messageList}
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


        <h1>
          _____________
          <br></br>
          Put Axios and<br></br> Firebase code here.

          <br></br>



          {/* Rewrite this */}
{/* 
HTML

<ul>
    <li class="project span3" data-type="pfa">
    <a href="#" data-id="2" class="thumbnail">
        <img src="img/anon.jpg" alt="Kenneth Atkins" />
        <h1>Kenneth Atkins</h1>
        <p>[Description here]</p>
    </a>     
    </li>
</ul>


JavaScript
(function($) {
    var infoModal = $('#myModal');
    $('.thumbnail').on('click', function(){
        $.ajax({ 
          type: "GET", 
          url: 'getJson.php?id='+$(this).data('id'),
          dataType: 'json',
          success: function(data){ 
            htmlData = '<ul><li>title: '+data.first_name+'</li><li>age: '+data.age+'</li></ul>';
            infoModal.find('.modal-body').html(htmlData);
            infoModal.modal('show');
          }
        });

        return false;
    });
})(jQuery);


 */}




































          _____________
          
          
          </h1>


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

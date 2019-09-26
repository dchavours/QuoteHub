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
    posts: [ ]
  }


   

componentDidMount() {
  
   axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                console.log(res);
             this.setState({
            posts: res.data.slice(0, 10)
            })
          })
  }

  render() {

    const { show, handleHide } = this.props;
    const { posts } = this.state; 
     const postList = posts.length ? 
     (posts.map(post => {
         return (
           <div className="post-card" key={post.id}>
              <div className="card-content">{post.body}</div>
           </div>
         )})) 
         
         : 

         (<div className="center">No posts yet</div>) 



    return (
      <Modal
        width={1020}
        title="Download Options"
        visible={show}
        onOk={handleHide}
        onCancel={handleHide}
        footer={null}
      >
   




          <br></br>
          Put Axios and<br></br> Firebase code here.

          <p>{postList}</p>


          <br></br>




      
      </Modal>
    );
  }
}

export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);

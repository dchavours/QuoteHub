import React, { Component } from 'react'

export class ListModal extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}

export default ListModal

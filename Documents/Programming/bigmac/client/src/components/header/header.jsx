import React, { Component } from 'react'

export default class header extends Component {

  state = {
    data: []
  }
  
  render() {
    return (
      <div style={headerContainer}>
        Header
      </div>
    )
  }
}

const headerContainer = {
  width: '100%',
  height: '2rem',
  backgroundColor: 'lightBlue',
}
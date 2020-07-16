import React, { Component } from 'react'

class Widecard extends Component {
  render() {
    return (
      <div class="card">
        <div class="cardbody">
          <h3 class="card-title">{this.props.title}</h3>
          <h4 class="card-text">{this.props.where}</h4>
          <h4 class="card-text small">{this.props.from} - {this.props.to}</h4>
        </div>
      </div>
    )
  }
}

export default Widecard

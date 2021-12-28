import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      subtitle: props.subtitle,
    };
  }

  render() {
    return (
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{this.state.title}</h1>
          <span className="subtitle">{this.state.subtitle}</span>
        </div>
      </div>
    );
  }
}

export default MenuItem;

import React, { Component } from 'react';

class ChildComponent extends Component {
  showAlert = () => {
    alert('Hello from Child Component!');
  };

  render() {
    return (
      <div>
        <p>Child Component</p>
      </div>
    );
  }
}

export default ChildComponent;

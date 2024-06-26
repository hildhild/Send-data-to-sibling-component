import React, { Component } from 'react';
import ChildComponent from '../ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  callChildMethod = () => {
    this.childRef.current.showAlert();
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent ref={this.childRef} />
        <button onClick={this.callChildMethod}>Call Child Method</button>
      </div>
    );
  }
}

export default ParentComponent;

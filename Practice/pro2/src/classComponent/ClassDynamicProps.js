import React, { Component } from "react";
class ClassDynamicProps extends Component {
  render() {
    return (
      <div>
        <h2>ClassDynamicProps</h2>
        <h3>Hello {this.props.name}</h3>
      </div>
    );
  }
}
export default ClassDynamicProps;

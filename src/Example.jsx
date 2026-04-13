import React, { Component } from "react";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps,nextState)
    // throw new Error("Error in shouldComponentUpdate");
    console.log("Should Update?");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps,prevState)
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    console.log("Render");
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </>
    );
  }
}

export default Example;

import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(err, info) {
    console.log("Caught by EB", err, info);
  }

  render() {
    if (this.state.hasError) {
      <div>
        <h2>something is wrong here</h2>
        {this.state.message}
      </div>;
    }
    return this.props.children;
  }
}

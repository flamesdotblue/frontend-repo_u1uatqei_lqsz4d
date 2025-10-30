import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log for debugging in console; avoids crashing the whole app
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    const { hasError } = this.state;
    const { fallback } = this.props;

    if (hasError) {
      return fallback || null;
    }

    return this.props.children;
  }
}

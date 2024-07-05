import React, { ErrorInfo, ReactNode } from 'react';
import { toast } from 'sonner';
import Exception from 'packages/exception';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  showToast?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { title, description } = Exception.catch(error).message;
    if (this.props.showToast) {
      if (typeof this.props.fallback === 'string') {
        toast.error(title, { description: this.props.fallback });
      } else {
        toast.error(title, { description });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      switch (typeof this.props.fallback) {
        case 'undefined':
          return <div className="text-sm text-pink-500">Something went wrong.</div>;
        case 'string':
          return <div className="text-sm text-pink-500">{this.props.fallback}</div>;
        default:
          return this.props.fallback;
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

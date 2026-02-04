import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class GlobalError extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-red-50 text-red-900 p-8 font-sans">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
                        <p className="text-lg mb-6">The application crashed with the following error:</p>

                        <div className="bg-white border border-red-200 rounded-lg p-6 shadow-sm overflow-auto">
                            <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
                            <pre className="bg-red-50 p-4 rounded text-sm font-mono whitespace-pre-wrap">
                                {this.state.error?.toString()}
                            </pre>

                            {this.state.errorInfo && (
                                <>
                                    <h2 className="text-xl font-semibold text-red-700 mt-6 mb-2">Component Stack</h2>
                                    <pre className="bg-gray-50 p-4 rounded text-sm font-mono whitespace-pre-wrap text-gray-700">
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="mt-8 px-6 py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

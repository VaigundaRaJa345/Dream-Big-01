import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';

interface ErrorPageProps {
    code?: number;
    title?: string;
    message?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
    code = 404,
    title,
    message
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine content based on error code
    const getErrorContent = (errorCode: number) => {
        switch (errorCode) {
            case 404:
                return {
                    title: "Page Not Found",
                    message: "Oops! The page you're looking for seems to have vanished into the digital void.",
                    icon: <div className="text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">404</div>
                };
            case 500:
                return {
                    title: "Server Error",
                    message: "Something went wrong on our end. We're working on fixing it.",
                    icon: <div className="text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">500</div>
                };
            case 503:
                return {
                    title: "Service Unavailable",
                    message: "We're currently performing some maintenance. Please check back soon.",
                    icon: <div className="text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">503</div>
                };
            default:
                return {
                    title: "An Error Occurred",
                    message: "Something unexpected happened. Please try again later.",
                    icon: <AlertTriangle className="w-32 h-32 text-slate-300 dark:text-slate-700" />
                };
        }
    };

    const content = {
        ...getErrorContent(code),
        ...(title && { title }),
        ...(message && { message }),
    };

    // Log error if it's not a 404
    useEffect(() => {
        if (code !== 404) {
            console.error(`Error ${code} occurred at ${location.pathname}`);
        }
    }, [code, location]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto relative">
                {/* Background decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 blur-3xl">
                    <div className="w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 ml-20"></div>
                </div>

                <div className="mb-8 relative inline-block">
                    {content.icon}
                    {code === 404 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-500 text-sm font-mono tracking-widest bg-white dark:bg-slate-900 px-2 py-1 rotate-12 rounded border border-primary-200 dark:border-primary-900">
                            LOST IN SPACE
                        </div>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    {content.title}
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
                    {content.message}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        variant="primary"
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>

                    {code !== 404 && (
                        <Button
                            variant="secondary"
                            onClick={() => window.location.reload()}
                            className="flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Reload Page
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

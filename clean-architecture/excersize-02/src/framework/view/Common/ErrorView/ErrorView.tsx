import React from 'react';

interface ErrorViewProps {
	error: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ error }) => {
	return <div>{error}</div>;
};

export default ErrorView;

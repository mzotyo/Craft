import React from 'react';

interface MessagePresenterProps {
	message: string;
}

const MessagePresenter: React.FC<MessagePresenterProps> = ({ message }) => {
	return <div>{message}</div>;
};

export default MessagePresenter;

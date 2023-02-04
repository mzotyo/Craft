import React from 'react';
import { ViewModel } from '../../../../delivery/presenters/presenter';
import ErrorView from '../../Common/ErrorView/ErrorView';
import MessageView from './MessageView/MessageView';

interface ResultProps {
	result: ViewModel;
}

const Result: React.FC<ResultProps> = ({ result }) => {
	if ('error' in result) {
		return <ErrorView error={`${result.error}`} />;
	}
	if ('text' in result) {
		return <MessageView message={result.text} />;
	}
	return <></>;
};

export default Result;

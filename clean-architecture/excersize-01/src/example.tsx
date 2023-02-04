import React, { useState } from 'react';

//------------------------------------------------------------------------------
// Entity Gateway
//------------------------------------------------------------------------------
const FetchService = {
	fetchFirstString: async (): Promise<string> => {
		return fetch('https://api.example.com/first')
			.then((response) => response.json())
			.then((data) => data.message);
	},
	fetchSecondString: async (): Promise<string> => {
		return fetch('https://api.example.com/second')
			.then((response) => response.json())
			.then((data) => data.message);
	},
};

//------------------------------------------------------------------------------
// Validator
//------------------------------------------------------------------------------
const Validator = (inputMessage: string) => {
	if (inputMessage.length === 0) {
		return 'Input message cannot be empty';
	}
	if (inputMessage.length > 100) {
		return 'Input message is too long';
	}
	return '';
};

//------------------------------------------------------------------------------
// Interactor
//------------------------------------------------------------------------------

type OutputBoundary = (result: string | Error) => void;
type InputBoundary = { fetchData: (message: string) => void };

type Interactor = (
	fetchService: typeof FetchService,
	validator: typeof Validator
) => (callback: OutputBoundary) => InputBoundary;

const Interactor: Interactor = (fetchService, validator) => (callback) => {
	const fetchData = (inputMessage: string) => {
		const error = validator(inputMessage);
		if (error) {
			return callback(error);
		}
		Promise.all([
			fetchService.fetchFirstString(),
			fetchService.fetchSecondString(),
		]).then(([first, second]) => {
			const responseModel = mapToResponseModel(
				first,
				second,
				inputMessage
			);
			return callback(responseModel);
		});
	};

	return {
		fetchData,
	};
};

// Mappers
const mapToResponseModel = (
	first: string,
	second: string,
	inputMessage: string
): string => {
	return first + second + inputMessage;
};

//------------------------------------------------------------------------------
// Presentation
//------------------------------------------------------------------------------

// Message Presenter
interface MessagePresenterProps {
	message: string;
}

const MessagePresenter: React.FC<MessagePresenterProps> = ({ message }) => {
	return <div>{message}</div>;
};

// Error Presenter
interface ErrorPresenterProps {
	error: Error;
}

const ErrorPresenter: React.FC<ErrorPresenterProps> = ({ error }) => {
	return <div>{error}</div>;
};

// Presenter
interface PresenterProps {
	result: string | Error | undefined;
}

const Presenter: React.FC<PresenterProps> = ({ result }) => {
	if (result === undefined) {
		return <></>;
	}

	if (result instanceof Error) {
		return <ErrorPresenter error={result} />;
	} else {
		return <MessagePresenter message={result} />;
	}
};

//------------------------------------------------------------------------------
// InputField
//------------------------------------------------------------------------------
const InputField: React.FC<{ onClick: (inputMessage: string) => void }> = ({
	onClick,
}) => {
	const [inputMessage, setInputMessage] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputMessage(e.target.value);
	};

	return (
		<div>
			<input type="text" value={inputMessage} onChange={handleChange} />
			<button onClick={() => onClick(inputMessage)}>Refresh data</button>
		</div>
	);
};

//------------------------------------------------------------------------------
// Container
//------------------------------------------------------------------------------
export const Container: React.FC = () => {
	const [result, setResult] = useState<string | Error>();

	const updateView = (result: string | Error) => {
		setResult(result);
	};
	const interactor = Interactor(FetchService, Validator)(updateView);

	const handleClick = (inputMessage: string) => {
		interactor.fetchData(inputMessage);
	};

	return (
		<div>
			<InputField onClick={handleClick} />
			<Presenter result={result} />
		</div>
	);
};

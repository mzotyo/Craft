import React, { useState } from 'react';
import { Controller } from '../../../delivery/controllers/controller';
import { Presenter, ViewModel } from '../../../delivery/presenters/presenter';
import InputField from './InputField/InputField';
import Result from './Result/Result';

const Main: React.FC = () => {
	const [model, setModel] = useState<ViewModel>({ text: '' });

	function updateView(viewModel: ViewModel): void {
		setModel(viewModel);
	}

	const handleClick = (inputMessage: string) => {
		const fetchData = Controller(Presenter(updateView));
		fetchData(inputMessage);
	};

	return (
		<div>
			<InputField onClick={handleClick} />
			<Result result={model} />
		</div>
	);
};

export default Main;

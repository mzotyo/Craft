import React, { useState } from 'react';

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

export default InputField;

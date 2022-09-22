import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

test('Hello World test', () => {
	render(<App />);
	const linkElement = screen.getByText(/Hello World!/i);
	expect(linkElement).toBeInTheDocument();
});

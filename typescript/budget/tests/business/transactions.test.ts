import * as React from 'react';
import { renderHook, screen } from '@testing-library/react-hooks';
import { useWallets } from '../../business';

test('Get a wallet', () => {
	const { result } = renderHook(() => useWallets());
	expect(result.current.length).toEqual(1);
});

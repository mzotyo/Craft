module.exports = {
	// 'node' is the default env starting from v27 so this must be specified
	testEnvironment: 'jsdom',
	testRunner: 'jest-jasmine2',

	globals: {
		'ts-jest': {
			isolatedModules: true
		}
	},

	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes
	roots: ['<rootDir>/tests'],

	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},

	// A list of paths to modules that run some code to configure or set up the testing environment.
	// Each setupFile will be run once per test file. Since every test runs in its own environment,
	// these scripts will be executed in the testing environment immediately before executing the test code itself.
	setupFiles: ['jest-canvas-mock'],

	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: ['./tests/setupTests.ts'],

	// Test spec file resolution pattern
	// Matches parent folder `__tests__` and filename
	// should contain `test` or `spec`.
	testRegex: '((\\.|/*.)(test))\\.tsx?$',

	// Module file extensions for importing
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

	moduleNameMapper: {
		'react-i18next': '<rootDir>/tests/mocks/react-i18next.mock.ts',
		i18next: '<rootDir>/tests/mocks/i18next.mock.ts',
		'redux-form': '<rootDir>/tests/mocks/redux-form.mock.ts'
	}
};

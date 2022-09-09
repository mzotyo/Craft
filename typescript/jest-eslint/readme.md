# Jest testing library

## Initial setup

```shell
# Initialize package.json
> npm init --yes

# Install typescript dependency
> sudo npm install -g typescript

# Initialize tsconfig.json
> tsc --init

# Install jest, ts-jest, @types/jest dependency
> npm install --save-dev jest ts-jest @types/jest

# Set ts-jest as a preprocessor. The  jest.config.js will be created.
npx ts-jest config:init

# Add eslint
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```


Add following settings to *tsconfig.json*. Remove commented out code.

```json
"outDir": "./out"
```

Add following script definition to *package.json*.

```json
"build": "tsc"
"test": "jest"
```

Create config file for eslint _.eslintrc_

```json
{
	"parser": "@typescript-eslint/parser",
	"parserOption": {
		"ecmaVersion": 2020
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	]
}
```

## Example Jest Test

```ts
describe('My first jest test', () => {
    it('says hello world from jest test', () => {
        conosle.log('hello world');
    }
});
```

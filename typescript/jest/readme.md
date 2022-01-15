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

## Example Jest Test

```ts
describe('My first jest test', () => {
    it('says hello world from jest test', () => {
        conosle.log('hello world');
    }
});
```

# Jest testing library setup for javascript

## Initial setup

```shell
# Initialize package.json
> npm init --yes

# Install jest dependency
> npm install --save-dev jest
```

Add following script definition to *package.json*.
```json 
"test": "jest"
```

## Example Jest Test

```ts
describe('My first jest test', () => {
    it('says hello world from jest test', () => {
        conosle.log('hello world');
    });
});
```

## Nested Prop Resolver
This library helps you to find and get a nested property from a complex json object without any runtime error.
You can use this to resolve json properties from an api response.

eg:

const responseObj = {
  user: {
    name: 'Hiran'
  }
};

const officeAddress = responseObj.office.address // This will give you a runtime error since there is no 'office' property in api response object.

So, use the 'nested-prop-resolver' to prevent runtime errors.

const officeAddress = resolve(responseObj, 'office.address'); // Output is undefined. No runtime error.

const userName = resolve(responseObj, 'user.name'); // Output is 'Hiran'.


## Install
```sh
yarn nested-prop-resolver
```
or
```sh
npm install nested-prop-resolver --save

```

### Example

```js
import { resolve } from 'nested-prop-resolver';

// For nested props
const responseObj = {
  user: {
    name: 'Hiran'
  }
};

const name = resolve(responseObj, 'user.name'); // Output the value of name property.


// For nested arrays
const responseObj = {
  users: [
    {
      name: 'Hiran'
    }
  ]
};

const name = resolve(responseObj, 'users[0].name'); // Output the value of name property.


// For complex nested arrays
const responseObj = [
  {
    users: [
      {
        name: 'Hiran'
      }
    ]
  }
];

const name = resolve(responseObj, '[0].users[0].name'); // Output the value of name property.


// For unpresent nested props.
const responseObj = {
  user: {
    name: 'Hiran'
  }
};

const name = resolve(responseObj, 'user.age'); // Output undefined.

```


## License

MIT © [H.R. Hiran Peiris](https://github.com/hiranpeiris)

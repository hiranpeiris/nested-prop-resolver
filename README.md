## Nested Prop Resolver
This library helps you to find and get a nested property from a complex json object.

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
const obj = {
  user: {
    name: 'Hiran'
  }
};

const name = resolve(obj, 'user.name'); // Output the value of name property.


// For nested arrays
const obj = {
  users: [
    {
      name: 'Hiran'
    }
  ]
};

const name = resolve(obj, 'users[0].name'); // Output the value of name property.


// For complex nested arrays
const obj = [
  {
    users: [
      {
        name: 'Hiran'
      }
    ]
  }
];

const name = resolve(obj, '[0].users[0].name'); // Output the value of name property.


// For unpresent nested props.
const obj = {
  user: {
    name: 'Hiran'
  }
};

const name = resolve(obj, 'user.age'); // Output undefined.

```


## License

MIT © [H.R. Hiran Peiris](https://github.com/hiranpeiris)

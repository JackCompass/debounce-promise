# Debounce-promise
A simple js utility to debounce functions that return promises. Majorly we use debounce method and
don't use the return value. In such cases we can use simple use the setTimer or debounce method from lodash library.
But the lodash library doesn't work with promises.

## Installation
```bash
npm install debounce-promise-latest
```

## Usage
```js
import debounced from 'debounce-promise-latest';

const handleAsyncTask = async () => {
    const data = await debounced(debounceFunction, delay, options);
} 
```

## API
### - debounceFunction
The function that you want to debounce. It will take arguments that you would pass in the options.

### - delay
The delay in milliseconds for which you want to debounce the function.

### - options
The options object that you want to pass to the debounceFunction. It is optional.






# Node.js Event Emitter Hobby Project

This is a hobby project where I attempt to implement a simplified version of the Node.js Event Emitter functionality using Node.js and Typescript. Please note that this implementation is not intended for production use and serves solely as a learning exercise.

## Description

The Node.js Event Emitter is a powerful tool in Node.js that allows objects to emit and listen to custom events. It provides a way to facilitate asynchronous communication between different components of an application. In this hobby project, I explore the basics of building an Event Emitter from scratch, aiming to gain a deeper understanding of its inner workings.

## Features

- **Event Registration**: You can register event listeners for specific events.
- **Event Emission**: Emit events to trigger the execution of registered event listeners.
- **Support for Multiple Listeners**: The implementation supports multiple listeners for the same event.
- **Asynchronous Execution**: Event listeners are executed asynchronously, enabling non-blocking event handling.


## Usage

```javascript
const EventEmitter = require('../dist/eventEmitter');

// Create an instance of the event emitter
const emitter = new EventEmitter();

// Register an event listener
emitter.on('customEvent', (data) => {
  console.log('Received data:', data);
});

// Emit an event
emitter.emit('customEvent', { message: 'Hello, world!' });
```

## Contributions

Contributions to this hobby project are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This hobby project is licensed under the MIT License. For more information, please see the [LICENSE](LICENSE) file.

const EventEmitter = require('events');

const event = new EventEmitter();

const foo = (arg) => {
    console.log('foo  arg:  ', arg);
};
for (let i = 0; i < 5; i++) {
    event.on('hly', foo);
}
event.emit('hly', 'on');
event.emit('hly', 'on');
event.once('hly_once', foo);
event.emit('hly_once', 'once');
event.emit('hly_once', 'once');
event.emit('hly_once', 'once');
console.log(event.eventNames()); // [ 'hly' ]

console.log(event.getMaxListeners()); // 10     default max value 10

console.log(event.listenerCount('hly')); // 5

/**
 *  [
        [Function: foo],
        [Function: foo],
        [Function: foo],
        [Function: foo],
        [Function: foo]
    ]
 */
console.log(event.listeners('hly')); 

event.removeAllListeners('hly')
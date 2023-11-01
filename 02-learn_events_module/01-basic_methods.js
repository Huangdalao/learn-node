const EventEmitter = require('events');

const event = new EventEmitter();

const hlyFoo = (a, b, c) => {
    console.log('listen for hly events');
    console.log(a, b, c);
};

event.on('hly', hlyFoo);

setInterval(() => {
    event.emit('hly', 'msg1', 2, { msg: 'msg3' });
}, 2000);

setTimeout(() => {
    event.off('hly', hlyFoo);
}, 5000);
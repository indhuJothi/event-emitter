const eventemitter = require('events');
const eventEmitter = new eventemitter();

let msg1 = (msg)=>{
    console.log('I am first ' + msg);
}
 let msg2 =(msg)=>{
     console.log('I am second '+ msg);
 }

 let msg3 =(msg)=>{
     console.log('I am third '+ msg)
 }

 eventEmitter.on('ItsEvent',msg1)
 eventEmitter.on('ItsEvent',msg2) 
 eventEmitter.on('ItsEvent',msg3)

 eventEmitter.emit('ItsEvent', 'msg from the event emit');

 eventEmitter.removeListener('ItsEvent', msg1);

console.log('--------------');
console.log('I am after the removing event');
console.log('--------------');
 eventEmitter.emit('ItsEvent', 'msg from the event emit');

 eventEmitter.removeAllListeners('ItsEvent');

 console.log('Notheing will emit here because we remove all the listners');
 eventEmitter.emit('ItsEvent', 'msg from the event emit');
 
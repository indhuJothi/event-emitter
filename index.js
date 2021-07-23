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


/*Event module
NodeJSs has a built in module called events
where you can create-,fire-,and listen for- your own server.
*/

// eg 1: Registering for the event to the fired only one time using once
// eg 2: Create an event emitter instance and regsiter a couple of callback
// eg 3: Registering for the events with callback parameter

const EventEmitter=require('events');
const event=new EventEmitter(); //creating object

//perform action for the created event
//and multiple callback for a single event
event.on("say my name",()=>{
    console.log("your name is vivek");
})
event.on("say my name",()=>{
    console.log("your name is gupta");
})
event.on("say my name",()=>{
    console.log("your name is Vikki");
})
//creating event
event.emit("say my name");


event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})

//registering for the event with callback parameter
event.emit("checkpage",200,"ok")



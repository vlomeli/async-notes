//workers - enable you to run some tasks in a separate thread of execution.

//Workers give you the ability to run some tasks in a different thread, 
//so you can start the task, then continue with other processing (such as handling user actions).

//To avoid these problems on the web, your main code and your worker code never get direct access to each other's variables

//Workers and the main code run in completely separate worlds, 
//and only interact by sending each other messages. In particular, this means that workers 
//can't access the DOM (the window, document, page elements, and so on).

//3 types of workers - dedicated /shared /service

//example code of dedicated 
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

//Remember that this runs as soon as the main script creates the worker.

//The first thing the worker does is start listening for messages from the main script. It does this using addEventListener(), which is
 //a global function in a worker. Inside the message event handler, the data property of the event contains a copy of the argument passed from the main script.
 //If the main script passed the generate command, we call generatePrimes(), passing in the quota value from the message event.

 //The worker we just created was what's called a dedicated worker. This means it's used by a single script instance.

 //Shared workers can be shared by several different scripts running in different windows.
//Service workers act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of Progressive Web Apps.

//Workers can be an effective way to keep the main application responsive, although they can't
 //access all the APIs that the main application can, and in particular can't access the DOM.


 //To create a Web Worker, you use the Worker constructor in JavaScript, passing the URL of the script file you want to run in the worker as an argument. 
 //For example:

const worker = new Worker('worker.js');

//You can communicate with a Web Worker through the use of the postMessage method. The worker can also send messages back to the main thread by using the 
//postMessage method as well. Here's an example of sending a message to a worker:

worker.postMessage('Hello from the main thread!');


//Inside the worker, you can listen for messages using the onmessage event:

self.onmessage = function(event) {
  console.log('Message received in worker:', event.data);
};

//Use Cases:
//Web Workers are useful for handling computationally intensive tasks, data processing, and other tasks that
// could potentially block the main thread and cause the application to become unresponsive. Examples include image 
// processing, data synchronization, and real-time data analysis.

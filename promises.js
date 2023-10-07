//A promise is an object returned by an asynchronous function

// fetch() API, is the modern, promise-based replacement for XMLHttpRequest.

//immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.

// then() is just a method

//The response shows the 200 (OK) status code, meaning that our request succeeded.



//chaining promises  
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });


//optimal way to chain promises
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });


//both of the above chained promises are retrieving the first name in products.json


//check that the server accepted and was able to handle the request, before we try to read it
//checking the status code in the response and throwing an error if it wasn't "OK":
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    });

/* To support error handling, Promise objects provide a catch() method. This is a lot like then(): 
you call it and pass in a handler function. However, while the handler passed to then() is called
when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails. */


//this code has an error handler using catch(), and also modified the URL so the request will fail.
// the link is bad on purpose so that it fails & when it does it says that the request failed in the console
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

//First, a promise can be in one of three states:

//pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
//fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
//rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called. 


// adding asycn to the start of a function makes it an asyn func 

async function myFunction() {
  // This is an async function
}

//eaxample of await and async
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();


//Keep in mind that just like a promise chain, await forces asynchronous operations to be completed in series. 
//This is necessary if the result of the next operation depends on the result of the last one,
 //but if that's not the case then something like Promise.all() will be more performant.

 
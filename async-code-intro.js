// async code means that code can be ran in any order and does not have to wait for certain code to execute.

// if you have too many lines of sync code the application will not be as fast because it has to wait for previous line of code to be read before it can execute the next.

//call back hell is when you have nest functions using call back too many times. Can make it hard to debug and read.

//instead of call backs async code uses promises.



//async examples 


//Fetching data from an API using fetch (Promises):

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
  

//Using async/await with fetch (Async/Await):

  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();


//Using setTimeout for asynchronous execution:

  console.log('Start');
  setTimeout(() => {
    console.log('Async operation complete');
  }, 2000); // Delays execution by 2 seconds
  console.log('End');


//Sync Code Example:

  function syncFunction() {
    console.log('Step 1');
    console.log('Step 2');
    console.log('Step 3');
  }
  
  syncFunction();
  console.log('All steps completed.');
//Using Promise

function add(x) {
    let i = 0;
    while (x <= 4) {
      i += x;
      x++;
    }
  
    return "The sum of first four natural number is " + i;
  }

  //function declaration
  //we use try catch to resolve and reject 
  function compute(x){
    return new Promise((resolve,reject)=>{
        try{
            const result = add(x);
            resolve(result);
        }catch (error){
            reject(error);
        }
    });
  }

  //function call we use then and catch for result and error
  compute(1)
  .then(result => console.log(result))
  .catch(error => console.error(error));
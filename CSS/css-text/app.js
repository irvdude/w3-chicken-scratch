document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM fully loaded and parsed");
  e.preventDefault();
})(
  //IIFE Immediately Invoked Function Expressionks

  (param) => {
    //initiation code
    let firstVar;
    let secondaVar;
  }
)(param); //param is executed immediately after function invokation

//first var and secon var discarded after func exeuction

// (async () => {
//     //.....
//     for await(/* of */)
// })

const addOne = ((additive) => {
  return additive + 1;
})(additive);

addOne(5);
//retruns 5

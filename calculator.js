/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function(){

  var memory = 0;
  var total = 0;
  var calculator = {
    load: validate(_load),
    getTotal: _getTotal,
    add: validate(_add),
    subtract: validate(_subtract),
    multiply: validate(_multiply),
    divide: validate(_divide),
    recall: _recall,
    save: _save,
    clear: _clear
  };
  return calculator;

  function validate(fn){
    return function(x){
      if (typeof x !== "number"){
        return "error";
      }
      return fn(x);
    }
  }

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function _load(x){
    total = x;
    return x;
    }


  /**
   * Return the value of `total`
   * @return { Number }
   */

   function _getTotal(){
    return total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function _add(x){
    return total += x;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function _subtract(x){
    return total -= x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function _multiply(x){
    return total *= x;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function _divide(x){
    return total /= x;
   }


  /**
   * Stores the value of `total` to `memory`
   */

   function _recall(total){
    total = memory;
    return memory;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function _save(){
    memory = total;
    return total;
   }


  /**
   * Clear the value stored at `memory`
   */

   function _clear(){
    memory = 0;
    return memory;
   }

}
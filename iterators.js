/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
// let Print =[];

 const logger = function(array) {
  array.forEach(X => console.log(X));
  // Your code here
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

 const toCelsius = function(temperatures) {
   let newArray = temperatures.map(X => ((X - 32) * (5/9)));
   newArray.forEach(temp=> console.log(temp))
  return newArray
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  return temperatures.filter(temp=>{
    if(temp>threshhold){
      return temp;
    }
  })
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
// const logHottestDays = function(temperatures, threshhold) {
//  let newArray = hottestDays(temperatures,threshhold)
// toCelsius(newArray)
// }


const logHottestDays = function(temperatures, threshhold) {
  
 toCelsius(hottestDays(temperatures,threshhold))
 }
 


export { logger, toCelsius, hottestDays, logHottestDays };

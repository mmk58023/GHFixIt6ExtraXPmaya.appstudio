let myNumbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]

let start = prompt('Please select an option: 1 - Average 2 - Sum')


switch(start) {
case '1' :
  let sum = myNumbers.reduce(function(a, b){
  return a + b;
  }, 0);
  let average = sum/myNumbers.length
  alert(`The average of the 10 numbers is ${average}.`)
  console.log(`The average of the 10 numbers is ${average}.`)
  let finish = prompt('Please choose 3 numbers to add to the end of the array \n ex. 1, 2, 3')
  let options = myNumbers.push(finish)
  alert(`The numbers ${finish} have been added. \n The numbers are now listed as ${myNumbers}.`)
  console.log(`The numbers ${finish} have been added. \n The numbers are now listed as ${myNumbers}.`)
  break;
case '2' :
  let add = myNumbers.reduce(function(a, b){
  return a + b;
  }, 0);
  alert(`The sum of the 10 numbers is ${add}.`)
  console.log(`The sum of the 10 numbers is ${add}.`)
  let done = prompt('Please choose 3 numbers to add to the end of the array \n ex. 1, 2, 3')
  let choices = myNumbers.push(done)
  alert(`The numbers ${done} have been added. \n The numbers are now listed as ${myNumbers}.`)
  console.log(`The numbers ${done} have been added. \n The numbers are now listed as ${myNumbers}.`)
  break;
default :
  alert('You have failed to enter a number.')
  break;
}
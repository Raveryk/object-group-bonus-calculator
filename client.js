const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


let employeeBonus = [];

function bonus( employee ) {

  let worker = {
    name: employee.name,
  };

  if( employee.reviewRating <= 2 ) {
    worker.bonusPercentage = 0;
  } else if( employee.reviewRating === 3 ) {
    worker.bonusPercentage = .04;
  } else if( employee.reviewRating === 4 ) {
    worker.bonusPercentage = .06;
  } else if( employee.reviewRating === 5 ) {
    worker.bonusPercentage = .10;
  } if( employee.employeeNumber >= 1000 ) {
    worker.bonusPercentage = worker.bonusPercentage + .05;
  } if( employee.annualSalary > 65000 ) {
    worker.bonusPercentage = worker.bonusPercentage - .01;
  } if( 0 > worker.bonusPercentage){
    worker.bonusPercentage = 0;
  } if( .13 < worker.bonusPercentage ){
    worker.bonusPercentage = .13;
  }
  
  worker.totalBonus = Number(employee.annualSalary) * worker.bonusPercentage,
  worker.totalCompensation = Number(employee.annualSalary) + worker.totalBonus;
  employeeBonus.push(worker);

  return worker;   
} //end bonus


for ( let person of employees ) {
  console.log( bonus( person ) );
}

console.log(employeeBonus);

console.log( employees );







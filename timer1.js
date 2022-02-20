// Instructions:

// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments
// Example usage: node timer1.js 10 3 5 15 9 

// Code

// create an empty array that takes in arguments from the command line
// so we can slice 2 from the argvg onwards
// the array then needs to be sorted
// after sorting the array , we need to convert the input into milliseconds by multiplying it all by 100. Can do a loop
// loop through the lenght of the array, for each item print the beep, and assign the timeout number to be the element of the array

const timer = function () {
  let alarms = [];
  alarms = process.argv.slice(2);
  console.log(alarms);
 

  if(alarms.length === 0) {
    //console.log("empty input");
    return "";
  } else {
    alarms.sort((a, b) => (a - b));

    for (let i = 0; i < alarms.length; i++) {
        alarms[i] = alarms[i] * 100;
    }
    
    console.log(alarms);
  
    for (let i = 0; i < alarms.length; i++) {
      setTimeout(() => {
        console.log(".");
        //process.stdout.write('\x07')
      }, alarms[i]);
  
    }


  }


}

timer();

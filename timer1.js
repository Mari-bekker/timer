// Psuedocode

// create an empty array that takes in arguments from the command line
// so we can slice 2 from the argvg onwards
// the array then needs to be sorted
// after sorting the array , we need to convert the input into milliseconds by multiplying it all by 100. Can do a loop
// loop through the lenght of the array, for each item print the beep, and assign the timeout number to be the element of the array

const timer = function() {
  let alarms = [];
  alarms = process.argv.slice(2);

  if (alarms.length === 0) {
    return "";
  } else {
    alarms.sort((a, b) => (a - b));

    // Convert to milliseconds
    for (let i = 0; i < alarms.length; i++) {
      alarms[i] = alarms[i] * 100;
    }
  }

  // Previous code would convert all to numbers, and strings to NaN, remove all NaN
  for (let i = 0; i < alarms.length; i++) {
    if (isNaN(alarms[i])) {
      alarms.splice(i,1);
    }
  }

  // Handle the case of negative numbers
  for (let i = 0; i < alarms.length; i++) {
    if (alarms[i] < 0) {
      alarms.splice(i,1);
    }
  }
    
  // Print out the dot or the sound with the correct delay
  for (let i = 0; i < alarms.length; i++) {
    setTimeout(() => {
      console.log(".");
      //process.stdout.write('\x07')
    }, alarms[i]);

  }

};

timer();
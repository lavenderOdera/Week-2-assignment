
//conversion of js dates to string

const currentDate = new Date(); // Create a Date object representing the current date and time
const date = currentDate.toDateString(); // Get the date portion as a string
const time = currentDate.toLocaleTimeString(); // Get the time portion as a string

// Display the date
console.log('Date: ' + date);

// Display the time
console.log('Time: ' + time);

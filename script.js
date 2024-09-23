import readline from "readline";
let name;
let year;
let month;
let day;

function handleCalculateAge() {
  const today = new Date();

  // Validate the year
  if (isNaN(year) || year < 1900 || year > today.getFullYear()) {
    return "Please enter a valid year.";
  }

  // Validate the month
  if (isNaN(month) || month < 1 || month > 12) {
    return "Please enter a valid month (1-12).";
  }

  // Validate the day
  const maxDays = new Date(year, month, 0).getDate(); // Get the last day of the month
  if (isNaN(day) || day < 1 || day > maxDays) {
    return `Please enter a valid day (1-${maxDays}) for the given month.`;
  }

  const birthDate = new Date(year, month - 1, day);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Get the number of days in the last month
  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.Date();
  }

  // Add 12 months to get the correct month difference
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return `Hello ${name}! Your Age is: \n${ageYears} year${
    ageYears !== 1 ? "s" : ""
  }, ${ageMonths} month${ageMonths !== 1 ? "s" : ""}, ${ageDays} day${
    ageDays !== 1 ? "s" : ""
  }`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome To Tiny Age Calculator!");

// Ask for the user's name first
rl.question("What is Your Name Buddy? ", (inputtedName) => {
  name = inputtedName;

  // Ask for the year after getting the name
  rl.question("In which year were you born? ", (inputtedYear) => {
    year = parseInt(inputtedYear);

    // Ask for the month
    rl.question("In which month were you born (1-12)? ", (inputtedMonth) => {
      month = parseInt(inputtedMonth);

      rl.question("On which day were you born? ", (inputtedDay) => {
        day = parseInt(inputtedDay);

        // Calculate and display the result
        // console.log(
        //   `Hello, ${name}! You were born on ${year}-${month}-${day}.`
        // );
        console.log(" ");
        console.log(handleCalculateAge());

        // Finally, close the readline interface
        rl.close();
      });
    });
  });
});

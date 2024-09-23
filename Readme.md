# Tiny Age Calculator

Welcome to the **Tiny Age Calculator** This is a Node.js-based simple CLI script that calculates a user's age based on their input (year, month, and day of birth). The app prompts the user for their name and birth details, then calculates and displays their exact age in years, months, and days.

## Features

- Command-line interface to interact with the user.
- Input validation to ensure proper date format.
- Calculation of the user's exact age, including handling negative day/month offsets.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 12 or higher
- **npm**: Comes with Node.js (Verify installation with `node -v` and `npm -v`)

## Getting Started

Follow the instructions below to clone and run the project on your local machine.

### 1. Clone the Repository

Use the following command to clone this repository to your local machine:

```bash
git clone https://github.com/sheikhmohdnazmulhasan/nodejs-readline-age-calculator.git
```

### 2. Navigate to the Project Directory

```bash
cd nodejs-readline-age-calculator
```

### 3. Running the Application

Now you can run the script using the following command:

```bash
node script.js
```

This will launch the CLI and prompt you to enter your name, year, month, and day of birth. After entering your details, the script will calculate and display your age.

### Example Output

```bash
Welcome To Tiny Age Calculator!
What is Your Name Buddy? John
In which year were you born? 1995
In which month were you born (1-12)? 7
On which day were you born? 15

Hello John! Your Age is:
28 years, 2 months, and 8 days.
```

### Project Structure

```bash
.
├── script.js             # Main file containing the age calculator logic
├── README.md             # Project documentation
```

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

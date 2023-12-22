// npm install prompt-sync
const prompt = require("prompt-sync")();

// Using Classes

class addressclass {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

// Array Data type

entries = [];

// Add Entry

function addentry() {
  const myname = prompt("Enter name ");
  const myphone = prompt("Enter phone ");

  entry = new addressclass(myname, myphone);
  entries.push(entry);
}

// Display Using Spread Operator

function displayall() {
  console.log(...entries);
}

// Display Search

function displaysearch() {
  const search = prompt("Enter name ");
  let found = 0;

  for (entry of entries) {
    if (search === entry.name) {
      console.log(entry);
      found = 1;
      break;

    } else {
      found = 0;
    }

    if (found==0){
      throw new Error("Not Found");
    }
  }
}

// Menu Based Program

function displayMenu() {
  console.log("\nMenu:");
  console.log("1. Add Entry");
  console.log("2. View Entries");
  console.log("3. Search Entry");
  console.log("4. Exit");
}

function processOption(option) {
  switch (option) {
    case "1":
      console.log("\nAdd Entry: \n");
      addentry();
      break;
    case "2":
      console.log("\nView Entries\n");
      displayall();
      break;
    case "3":
      console.log("\nSearch Entries\n");
      // Using Try and Except
      try {
        displaysearch();
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
      break;
    case "4":
      console.log("\nExiting the program.\n");
      process.exit();
      break;
    default:
      console.log("\nInvalid option. Please choose a valid option.\n");
  }
}

function main() {
  while (true) {
    displayMenu();
    console.log();
    const userOption = prompt("Enter your choice: ");
    processOption(userOption);
  }
}

// Run the program
main();

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", (num) => {
      number = parseInt(num)
      sum += number
      console.log(sum)
      
      addNumbers(sum, numsLeft-1, completionCallback);   
    })
  } else {
    completionCallback(sum);
    reader.close();
  }

}
addNumbers(0, 3, sum => console.log(`The total sum is ${sum}`) )
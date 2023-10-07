function isPalindrome(word) {
  // Write your algorithm here

  let splitString = word.split("");
  let reversedArray = splitString.reverse();
  let joinedWord = reversedArray.join("");
  
  return (word == joinedWord);
}

console.log(isPalindrome("racecar"))

/* 
  Add your pseudocode here
  1. write our function isPalindrome that take in a (word) argument
  2. split the word into an array, reverse and join it
  3. create a if statement to check if the word paassed when reversed is still same
  4. return if output is true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

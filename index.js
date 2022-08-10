function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
   // racecar 7 / 2 == 3.5 (index position of the word racecar)
  //  aaaaa 6/ 2 == 3
  for (let i= 0; i < word.length / 2; i++) {
//  check each letter to the corresponding letter form the end
     const j = word.length - 1 - i
     const startChar = word[i]
     const endChar = word [j]
     // if any letters dont much, return false
     if (startChar !== endChar) return false;
  }
    // return true
    return true;
}


/* r a  c  e  c  a  r
   0 1  2  3  4  5  6  
  i                 j

  r a  c  e  c  a  r
  0 1  2  3  4  5  6  
    i           j
  r a  c  e  c  a  r
  0 1  2  3  4  5  6  
        i     j 
  r a  c  e  c  a  r
  0 1  2  3  4  5  6  
          ij 
/* 
  Add your pseudocode here
  that means if the 
  first letter is the same as letter, and the second letter is the same 
  as the second  to last letter, etc, until  we reach the middle, return true.
 
  iterate from the biggining to the middle 
  check each letter from the end 
   if any letter don't match , return false

   return true
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
/* 
/* Test Cases for validation of undertanding
mom === mom // true
car === rac //false
*/

/* Rewrite the problem in your own words
  Add your pseudocode here
  make function that returns true if a word is a palindrome and false if not.
  if the input word is the same to the transposed word, the return should be true.
*/
/* Test Case
mom === mom // true
car === rac //false
*/
/*
  Add written explanation of your solution here:


*/

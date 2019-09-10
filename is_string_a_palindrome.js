// pseudocode if a string is a palindrome:
// • if the string is made of no letters or just 1 letter, then it is a palindrome
// • otherwise, compare the first and last letters of the string

// • if the first and last letters differ, then the string is not a palindrome
// • otherwise, the first and last letter are the same. Strip them from the string
//   and determine whether the string that remains is a palindrome. Take the answer
//   for this smaller string and use it as the answer for the original string

// Returns the first character of the string str
var firstCharacter = function(str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
  return str.slice(1, -1);
};

var isPalindrome = function(str) {
  // base case #1
  if (str.length <= 1) {
    return true;
  }
  // base case #2
  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }
  // recursive case
  return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
  println("Is this word a palindrome? " + str);
  println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);
Program.assertEqual(isPalindrome("meal"), false);
Program.assertEqual(isPalindrome("mom"), true);

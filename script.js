function firstNonRepeatedChar(str) {

	function firstNonRepeatedChar(str) {
  // Create an object to store character counts
  const charCount = {};

  // Iterate through the string to count characters
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Increment the count for the current character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Check if the current character has a count of 1
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
  // Output: null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

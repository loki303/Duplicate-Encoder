function duplicateEncode(word) {
  // Convert the word to lowercase for case-insensitive comparison
  word = word.toLowerCase();

  // Create an empty object to store the character count
  const charCount = {};

  // Iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    // If the character already exists in charCount, increment its count
    // Otherwise, initialize its count to 1
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Create a new string based on the character counts
  let result = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    // If the character appears more than once, add ")"
    // Otherwise, add "("
    result += charCount[char] > 1 ? ')' : '(';
  }

  return result;
}

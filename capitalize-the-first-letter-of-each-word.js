/**
    Capitalize the First Letter of Each Word.

    Description:
    Write a function that capitalizes the first letter of each word in a string.

    Requirements:
    Create a function that takes a string as input,
    returns the string with the first letter of each word capitalized.
    
    Example Input: capitalizeWords('hello world')
    Example Output: 'Hello World'
    
    Bonus Points:
        Handle cases with extra spaces or punctuation.
        Ignore non-alphabetic characters.
 */

function capitalizeWords(input) {
    // Split the string into words by spaces
    const words = input.trim().split(/\s+/);

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        // Check if the word starts with an alphabetic character
        if (word.length > 0 && /[a-zA-Z]/.test(word[0])) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word; // Leave the word unchanged if it doesn't start with an alphabet
    });

    // Join the words back into a single string
    return capitalizedWords.join(' ');
}
        
// Example usage
console.log(capitalizeWords('hello world'));           // Output: 'Hello World'
console.log(capitalizeWords('   this is a test   '));  // Output: 'This Is A Test'
console.log(capitalizeWords('123abc def! ghi.'));      // Output: '123abc Def! Ghi.'
        

capitalizeWords('hello world');
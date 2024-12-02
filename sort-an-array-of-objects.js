/**
    Sort an array of objects based on a specific key.

    Requirements: 
        Create a function that takes an array of objects and a key as input,
        returns the array sorted by the given key.

    Example Input: sortObjects([{name: 'John', age: 25}, {name: 'Jane', age: 20}], 'age');
    Example Output: [{name: 'Jane', age: 20}, {name: 'John', age: 25}]
    
    Bonus Points:
        Handle cases where the key value is missing or null.
 */

function sortObjects(array, key) {
    // Sort the array
    return array.sort((a, b) => {
        const valueA = a[key] ?? null; // Use null if key is missing
        const valueB = b[key] ?? null;

        // Handle missing or null values: push them to the end
        if (valueA === null && valueB === null) return 0;
        if (valueA === null) return 1;
        if (valueB === null) return -1;

        // Compare values for sorting
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0; // Equal values
    });
}
        
// Example usage
const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 20 },
    { name: 'Alice' } // Missing 'age'
];

console.log(sortObjects(data, 'age'));
// Output: [{ name: 'Jane', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice' }]
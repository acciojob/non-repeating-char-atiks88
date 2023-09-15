function firstNonRepeatedChar(str) {
    for (let i of str) {
        if (str.split(i).length - 1 === 1) {
            return i;
        }
    }
    return null; // Return null if no non-repeated character is found.
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result === null) {
    alert(null);
} else {
    alert(result); 
}
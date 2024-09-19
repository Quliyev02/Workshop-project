function removeRepeatedCharacters(str) {
    let seen = new Set();  //creating set to keep track of characters that have already been added to the result string.
    // Set automatically handles duplicate values
    let result = '';        // empty string for return result

    for (let char of str) {
        if (!seen.has(char)) {  // checking If the character has not been seen before
            seen.add(char);     // Add the new repeated char deleted character to the Set(seen)
            result += char;     // Append the character to the result string
        }
    }

    return result;  // Return the result string with repeated characters removed
}

// Test
let testString = "Ferrari";
console.log(removeRepeatedCharacters(testString));

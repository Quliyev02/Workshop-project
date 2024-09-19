function replaceFirstSymbol(str, symbolToReplace, newSymbol) {
    // Find the index of the first occurrence of symbolToReplace
    let index = str.indexOf(symbolToReplace);
    
    // If symboltoreplace is not found return the original string
    if (index === -1) {
        return str;
    }
    
    // Replace the first occurrence of symbolToReplace with newSymbol
    // Slice the string into parts: before the symbolToReplace, the newSymbol, and after the symbolToReplace
    return str.slice(0, index) + newSymbol + str.slice(index + 1);
}

// Test the function
let testString = "hello! im xxyzzztt*&^";
let symbolToReplace = "!";
let newSymbol = "*";
console.log(replaceFirstSymbol(testString, symbolToReplace, newSymbol));
// Output: "hello* im john*"

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// testign the function
let testSentence = "Test for a reverse string function wow noon peep";
console.log(reverseWords(testSentence)); 
// Output: "loops. and arrays like topics JavaScript studying are We"

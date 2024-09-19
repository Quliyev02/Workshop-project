function countWordOccurrences(sentence, word) {
    // Converting the sentence to lowercase and split it into an array of words
    let words = sentence.toLowerCase().split(/\s+/);
    
    // ading a count var for count how much times the word repeated
    let count = 0;

    // iterating each word in the array
    for (let currentWord of words) {
        // check if the current word matches tarfget word
        if (currentWord === word.toLowerCase()) {
            count++;  // count+1
        }
    }

    return count;  // returning how much time repeated
}

// Test section
let testSentence = "hellow world this is a repeated letter example!:;'. world";
let targetWord = "world";
console.log(countWordOccurrences(testSentence, targetWord));

function isPalindrome(str) {
    // for delete all non numeric and other characters. and only use a-z 0-9
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // for reversing cleaned string. reverse is only works in arrays for this we split the str an array and rejoin to str
    //split-->reverse-->join str manipulation   
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // checking the origin str to reversed
    if (cleanedStr === reversedStr) {
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome.`);
    }
}

// tst
let testString = "123"
isPalindrome(testString); //

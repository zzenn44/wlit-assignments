function countVowel(word) {
    const vowels = 'aeiou';
    let count = 0;

    // Loop through each character
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Test case
const word = "strawberry";
const vowelCount = countVowel(word);
console.log(vowelCount);

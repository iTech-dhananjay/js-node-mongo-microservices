let ransomNote = 'a', magazine = 'b'

const canConstruct = (ransomNote, magazine) => {
    const magazineFreq = {}
    for (let char of magazine) {
        magazineFreq[char] = (magazineFreq[char] || 0) + 1
    }

    for (let char of ransomNote) {
        // If the character is not in the magazine or its frequency is 0, return false
        if (!magazineFreq[char]) {
            return false
        }

        // Decrease the frequency of the character in the magazineFreq
        magazineFreq[char]--
    }
    return true
}

console.log(canConstruct(ransomNote, magazine))
// #1 Sum Zero
let numArr = [1,2,3,-1]

const sumZero = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i])
            console.log(arr[j])
            if(arr[i] + arr[j] !== 0){
                continue
                console.log(arr[i])
                console.log(arr[j])
                console.log(sum)
            }else if(sum === 0){
                return true
            }else{
                return false
            }
            
        }
    }
}
console.log(sumZero(numArr))

// Runtime: O(n^2) since this is a nested loop that is not capped in any way.


// #2 Unique Characters
function uniqueName(str){
    let charCount = {}

    
    for (let i = 0; i < str.length; i++){

        let char = str[i];

        if(charCount[char]){
            return false
        }
    charCount[char] = true
    }
    return true
}

console.log(uniqueName(`Bryce`))
console.log(uniqueName(`messinger`))

// Runtime: O(n) because there is one uncapped nested loop.


// #3 Pangram Sentence
 let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

 const pangram = (str) => {
        str = str.toLowerCase()
        return alphabet.every(x => str.includes(x))
 }

 console.log(pangram("bronco"))
 console.log(pangram("The quick brown fox jumps over the lazy dog"))

//  Runtime: O(n) the .every method loops to check if each value passed in passes the condition, and since this code as it is is uncapped (does not necessarily have to be limited to just letters, could also include numbers and symbols) it can't be an O(1) 


// #4 Longest Word

let wordArr = ["hi", "hello", "greetings"]

const findLongestWord = (arr) => {
    let longestWord = 0
    let word = null
    for(let i = 0; i < arr.length; i++){
        if(longestWord < arr[i].length){
            longestWord = arr[i].length
            word = arr[i]
        }
    }
    return word
}
console.log(findLongestWord(wordArr))

// Runtime: O(1) because it simply looks for the string that will return the highest longestWord value

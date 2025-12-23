function ValidAnagram(s,t){
    if(s.length !== t.length) return false;
    let count={};
    for( let char of s){
        count[char] = (count[char] || 0)+1;
    }
    for(let char of t){
        if(!count[char]){
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(ValidAnagram("anagram","nagaram")); // true
console.log(ValidAnagram("rat","car")); // false

// time complexity o(n)
// space complexity o(1)  because we are using only 26 characters so it is constant space
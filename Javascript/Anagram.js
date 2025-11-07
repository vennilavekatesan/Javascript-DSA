// valid anagram problem
const anagram=(s,t)=>{
    if(s.length!==t.length) return false;
    const count={};
    for(let char of s){
        count[char]=(count[char] ||0)+1;
    }
    for(let char of t){
        if(!count[char]) return false;
        count[char]--;     // why we are decrementing because if the char is found in t we need to reduce the count
    }
    return true;  // if all the characters are matched then only it will return true otherwise it will return false in the loop itself
}

console.log(anagram("anagram","nagaram")); // true
console.log(anagram("rat","car")); // false

// time complexity o(n)
// space complexity o(1)  because we are using only 26 characters so it is constant space

// dry run
// s= "anagram", t="nagaram"
// count= {a:3, n:1, g:1, r:1, m:1}
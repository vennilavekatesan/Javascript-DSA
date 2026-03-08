const ValidPalindrome=(str)=>{
    let cleaned = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned===reversed;
}

const str='raceacar';
console.log(ValidPalindrome(str));
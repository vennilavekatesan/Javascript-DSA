function BalancedBrackets(str){
    const stack=[];
    const pairs={
        '(':')',
        '{':'}',
        '[':']'
    }
    for( char of str){
        if(pairs[char]){
            stack.push(char);
        }
        else{
            if(stack.length===0) return false;
            const last= stack.pop();
            if(pairs[last]!==char) return false;
        }
    }
    return stack.length===0;
}


console.log(BalancedBrackets("(){}[]")); // true
console.log(BalancedBrackets("([{}])")); // true
console.log(BalancedBrackets("(]")); // false
console.log(BalancedBrackets("((()))")); // true
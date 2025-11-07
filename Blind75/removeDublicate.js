const removeDuplicates= (nums)=>{
    let i=0; 
    for(let j=1; j<nums.length; j++){
        if(nums[i]!=nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
    // if you want the elements as well you can return nums.slice(0,i+1)
    // why we are returning i+1 because i is index so to get the count we need to add 1
}

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
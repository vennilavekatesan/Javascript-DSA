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
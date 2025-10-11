const twoSum = (nums, target)=>{
    const numMap = new Map();
    for(let i=0; i<nums.length; i++){
        const element = target - nums[i];
        if(numMap.has(element)){
            return [numMap.get(element),i]
        }
        numMap.set(nums[i],i)
    }
    return [];
}


// two pointer approach

const twoSum2 = (nums, target)=>{
    nums.sort((a,b)=>a-b);
    let left =0;
    let right = nums.length-1;
    while(left<right){
        const sum = nums[left]+nums[right];
        if(sum === target){
            return [left, right];
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15],9)); // [0,1]
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
// time complexity O(n log n) for two pointer approach
// space complexity O(1) for two pointer approach



// Moves Zeroes to the end of the array while maintaining the relative order of non-zero elements.

class Solution {
    moveZeroes = (nums)=>{
  let j=-1;
  for(let i=0; i<nums.length; i++){
    if(nums[i]===0){
        j=i;
        break;
    }
  }

  if(j===-1) return nums;
 
  for(let i=j+1; i<nums.length; i++){
    if(nums[i]!=0){
        let temp= nums[i];
        nums[i] = nums[j];
        nums[j] =temp;
        j++;
    }
  }

  return nums;

}
}

// another solution is - 
// we are using a 2 pointer like approach so we j and i 
// j always in the zero and i move through the all the elements

const moveZeroes2 =(nums)=>{
let j=0; 

for(let i=0; i<nums.length; i++){
    if(nums[i]!=0){
      [nums[i], [nums[j]]]=[nums[j], nums[i]]
      j++;
    }
}
   return nums;

}
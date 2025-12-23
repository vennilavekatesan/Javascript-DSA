

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
//dry run
let nums=[1,2,3,4,0,5,6,0];
console.log(moveZeroes2(nums)); // [1,2,3,4,5,6,0,0]

// i=0, j=0;
// nums[i]=1 !=0
// swap nums[i] and nums[j] => [1,2,3,4,0,5,6,0]
// j=1

// i=1, j=1
// nums[i]=2 !=0
// swap nums[i] and nums[j] => [1,2,3,4,0,5,6,0]
// j=2

// i=2, j=2
// nums[i]=3 !=0
// swap nums[i] and nums[j] => [1,2,3,4,0,5,6,0]
// j=3

// i=3, j=3
// nums[i]=4 !=0
// swap nums[i] and nums[j] => [1,2,3,4,0,5,6,0]
// j=4

// i=4, j=4
// nums[i]=0 ==0
// do nothing

// i=5, j=4
// nums[i]=5 !=0
// swap nums[i] and nums[j] => [1,2,3,4,5,0,6,0]
// j=5

// i=6, j=5
// nums[i]=6 !=0
// swap nums[i] and nums[j] => [1,2,3,4,5,6,0,0]
// j=6


function longestConsecutive(nums) {
    if (!nums || nums.length === 0) return 0;

    // Create a set to store the unique numbers
    const numSet = new Set(nums);
    let longestStreak = 0;

    // Iterate through the numbers
    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}


// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, -1])); // Output: 2
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])); // Output: 7

// Time Complexity: O(n) - Each number is processed at most twice.
// Space Complexity: O(n) - The set stores all unique numbers.

// another approach using sorting

function longestConsecutiveSorting(nums) {
    if (!nums || nums.length === 0) return 0;

    // sort the array
    nums.sort((a,b)=>a-b);
    let largest=1;
    let currentCount=0;
    let lastSmaller = INT_MIN;
    for(let i=0; i<nums.length; i++){
        if(nums[i]-1===lastSmaller){
            currentCount++;
            lastSmaller = nums[i];
        }
        else if(nums[i]!== lastSmaller){
            currentCount=1;
            lastSmaller = nums[i];
        }
        largest = Math.max(largest, currentCount);
    }
    return largest;
}

console.log(longestConsecutiveSorting([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutiveSorting([0, -1])); // Output: 2
console.log(longestConsecutiveSorting([9,1,4,7,3,-1,0,5,8,-1,6])); // Output: 7

// Time Complexity: O(n log n) - due to sorting.
// Space Complexity: O(1) - if we ignore the space used by sorting algorithm.



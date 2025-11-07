    const BinarySearch =(nums, target)=>{
        let left =0;
        let right= nums.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid]===target){
                return mid;
            }
            else if(nums[mid]<target){
                left =mid+1
            }
            else{
                right= mid-1;
            }
        }
        return -1;
    }


    nums = [1,2,3,4,5,6];
    target=4;
    console.log(BinarySearch(nums,target)); // 3

    // time complexity O(log n) why  log n - because we are reducing the search space by half each time
    // when we use logn ? when we have a sorted array and we want to find an element
    // space complexity O(1)

    // dry run 
    // left =0, right =5, mid =2
    // nums[mid] =3 < target =4
    // left = mid +1 =3
    // right =5
    // mid =4
    // nums[mid] =5 > target =4
    // right = mid -1 =3
    // left =3, right =3, mid=3
    // nums[mid] =4 == target =4
    // return mid =3

function countZeroes(arr,low=0,high=arr.length - 1){
  let midIdx;
  if(low <= high){
      const mid = low + Math.floor((high - low) / 2 )
      if((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0){
          midIdx = mid
      }else if(arr[mid] === 1){
          return countZeroes(arr,mid + 1,high)
      }else{
          return countZeroes(arr,low,mid - 1)
      }
  }

  return midIdx === undefined ? 0 : arr.length  - midIdx 
}


// function countZeroes(arr){
//   const firstZero = findZero(arr)
//   return firstZero === -1 ? 0 : arr.length - firstZero
// }

// function findZero(arr,low=0,high=arr.length - 1){
//   if(low <= high){

//     const mid = low + Math.floor((high - low) / 2)

//     if((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0){
//       return mid
//     }else if (arr[mid] === 1){
//       return findZero(arr,mid + 1,high)
//     }
//     return findZero(arr,low,mid - 1)
//   }
//   return -1 
// }




module.exports = countZeroes

function sortedFrequency(arr,val){ 
  let firstIdx = findFirst(arr, val);
  let lastIdx = findLast(arr, val);
  if (lastIdx == -1) return lastIdx;
  return lastIdx - firstIdx + 1;
}


// function findFirst(arr,val,low=0,high=arr.length - 1){
//   if(low <= high){
//     let mid = Math.floor((low + high) / 2)
//     if((mid === 0 || val > arr[mid - 1]) && arr[mid] === val){
//       return mid
//     }else if (val > arr[mid]){
//       return findFirst(arr,val,mid  + 1,high)
//     }else{
//       return findFirst(arr,val,low, mid - 1)
//     }
//   }
//   return -1
// }


// function findLast(arr,val,low=0,high=arr.length - 1){
//   if(low <= high){
//     let mid = Math.floor((low + high) / 2)
//     if((arr[mid + 1] > val || arr.length - 1 === mid) && arr[mid] === val){
//       return mid
//     }else if (arr[mid] > val){
//       return findLast(arr,val,low,mid -1)
//     }else{
//       return findLast(arr,val,mid + 1,high)
//     }
//   }

//   return -1
// }  

function findFirst(arr,val){
  let low = 0
  let high = arr.length - 1 

  while(low <= high){
    let mid = Math.floor((high + low) / 2)
    if((mid === 0 || val > arr[mid - 1]) && arr[mid] === val){
      return mid
    }else if (arr[mid] >= val){
      high = mid - 1
    }else{
      low = mid + 1
    }
  }

  return -1
}



function findLast(arr,val){
  let low = 0;
  let high = arr.length - 1

  while(low <= high){
    let mid = Math.floor((high + low) / 2)
    if((arr[mid + 1] > val || arr.length - 1 === mid) && arr[mid] === val){
      return mid 
    }else if (arr[mid] > val){
      high = mid - 1
    }else{
      low = mid + 1
    }
  }

  return -1
}




module.exports = sortedFrequency
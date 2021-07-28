function findRotatedIndex(arr,val){
  const pivot = findPivot(arr)
  if(val >= arr[0] && val <= arr[pivot - 1]){
    return binarySearch(arr,val,0,pivot - 1)
  }else{
    return binarySearch(arr,val,pivot,arr.length - 1)
  }
}

function binarySearch(arr,val,low=0,high=arr.length -1){ 
    if(low <= high){
      let mid = Math.floor((low + high) / 2)
      if(arr[mid] === val){
        return mid
      }else if(arr[mid] > val){
        return binarySearch(arr,val,low,mid - 1)
      }else{
        return binarySearch(arr,val,mid + 1,high)
      }
    }
    return -1
}

function findPivot(arr,low=0,high=arr.length -1){
  if(low <= high){
    let mid = Math.floor((low + high) / 2)
      if(arr[mid] > arr[mid + 1]){
        return mid + 1
      }else if(arr[low] >= arr[mid]){
        return findPivot(arr,low,mid - 1)
      }else{
        return findPivot(arr,mid + 1,high)
      }
  }
  return -1
}

module.exports = findRotatedIndex
function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return (a-b)})
	for(let i=0;i<arr.length;i++){
		console.log(arr[i])
	}
  
}

module.exports = threeSum;

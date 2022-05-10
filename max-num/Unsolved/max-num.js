// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var mNum = arr[0];
    for (var i = 1; i<arr.length; i++){
        if(mNum< arr[i]){
            mNum = arr[i];
        }
    }
    return mNum;
};

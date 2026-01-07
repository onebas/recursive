const sort = function(unsortedArray){
    if(unsortedArray.length===0) return [];
    let left = 0, right = unsortedArray.length-1;
    let sortedArray = [];

    while(left!=right){
        if(unsortedArray.at(left)<unsortedArray.at(right)){
            sortedArray.push(unsortedArray[left]);
            left++;
        }
        else{
            sortedArray.push(unsortedArray[right]);
            right--;
        }           

    }

    sortedArray.push(unsortedArray[left]);

    return sortedArray;
};

const merge = function(sortedLeft, sortedRight){
    let sortedList = [];
    let leftPoint = 0;
    let rightPoint = 0;

    while(leftPoint<sortedLeft.length && rightPoint<sortedRight.length){
        if(sortedLeft[leftPoint]<sortedRight[rightPoint]){
            sortedList.push(sortedLeft[leftPoint]);
            leftPoint++;
        }
        else{
            sortedList.push(sortedRight[rightPoint]);
            rightPoint++;
        }
    }

    while(leftPoint<sortedLeft.length){
        sortedList.push(sortedLeft[leftPoint]);
        leftPoint++;
    }

    while(rightPoint<sortedRight.length){
        sortedList.push(sortedRight[rightPoint]);
        rightPoint++
    }

    return sortedList;

};

const mergeSort = function(unsortedArray){
    if(unsortedArray.length === 0) return [];
    if(unsortedArray.length === 1) return unsortedArray;

    let unsortedLeft = mergeSort(unsortedArray.slice(0, Math.floor(unsortedArray.length/2)));
    let sortedLeft = sort(unsortedLeft);
    let unsortedRight = mergeSort(unsortedArray.slice(Math.floor(unsortedArray.length/2), unsortedArray.length));
    let sortedRight = sort(unsortedRight);

    let sortedArray = merge(sortedLeft, sortedRight);
    return sortedArray;
}

console.log(mergeSort([22, 5, 1, 3]));
console.log(mergeSort([]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

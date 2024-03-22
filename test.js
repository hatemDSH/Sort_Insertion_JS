function insertionSort(arr) {

    let len = arr.length;

    for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
    }
    arr[j + 1] = key;
    }
    return arr;
    }
    
    // Example 
    var entrerArray = [3, 2, 5, 9, 1, 6];
    var sortedArray = insertionSort(entrerArray);
    console.log(sortedArray); // Output: [1, 2, 3, 4, 6, 8]
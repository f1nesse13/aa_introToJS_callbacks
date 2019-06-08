function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length -1){
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if(isGreaterThan){
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
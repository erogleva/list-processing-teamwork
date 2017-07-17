define ([], function () {
    function reverseArr(arr, commandTokens) {
        if(commandTokens.length > 1){
            return 'Invalid parameters!'
        }
        let thisArray = arr.slice(0);
        thisArray.reverse();
        return thisArray;
    }

    return {
        reverseArr: reverseArr
    };

});


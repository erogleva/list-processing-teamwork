define ([], function () {
    function reverseArr(arr, commandTokens) {
        if(commandTokens.length > 1){
            throw new Error ('Invalid parameters!');
        }

        let theArray = arr.reverse();
        return theArray;
    }

    return {
        reverseArr
    };

});


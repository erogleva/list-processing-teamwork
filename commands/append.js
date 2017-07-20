define ([], function () {

    function appendArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new Error ('Invalid parameters!');
        }

        let theArray = arr.push(commandTokens[1]);
        return theArray;
    }

    return {
        appendArr
    };

});
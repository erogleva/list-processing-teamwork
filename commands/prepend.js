define([], function () {
    function prependArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new Error ('Invalid parameters!');
        }
        let theArray = arr.unshift(commandTokens[1]);
        return theArray;
    }

    return {
        prependArr
    };

});
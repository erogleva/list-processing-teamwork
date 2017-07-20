define ([], function () {
    function sortArr(arr, commandTokens) {
        if(commandTokens.length > 1){
            throw new Error ('Invalid parameters!');
        }

        return arr.sort();
    }

    return {
        sortArr
    };

});
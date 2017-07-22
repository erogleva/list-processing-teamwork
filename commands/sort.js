define (["../errors/input-error"], function (inputError) {
    function sortArr(arr, commandTokens) {
        if(commandTokens.length > 1){
            throw new inputError.InputError();
        }

        return arr.sort();
    }

    return {
        sortArr
    };

});
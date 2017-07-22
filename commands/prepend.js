define(["../errors/input-error"], function (inputError) {
    function prependArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new inputError.InputError();
        }
        let theArray = arr.unshift(commandTokens[1]);
        return theArray;
    }

    return {
        prependArr
    };

});
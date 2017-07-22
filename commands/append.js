define(["../errors/input-error"], function (inputError) {

    function appendArr(arr, commandTokens) {
        if (commandTokens.length !== 2) {
            throw new inputError.InputError();
        }

        let theArray = arr.push(commandTokens[1]);
        return theArray;
    }

    return {
        appendArr
    };

});
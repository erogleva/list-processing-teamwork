define(["../errors/command-parameter-error"], function (InputError) {

    function appendArr(arr, commandTokens) {
        if (commandTokens.length !== 2) {
            throw new InputError();
        }

        let theArray = arr.push(commandTokens[1]);
        return theArray;
    }

    return {
        appendArr
    };

});
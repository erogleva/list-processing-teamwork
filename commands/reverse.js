define (["../errors/input-error"], function (inputError) {
    function reverseArr(arr, commandTokens) {
        if(commandTokens.length > 1){
            throw new inputError.InputError();
        }

        arr.reverse();
    }

    return {
        reverseArr
    };

});


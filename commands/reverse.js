define(["../errors/command-parameter-error"], function (InputError) {

    function reverseArr(arr, commandTokens) {

        if(commandTokens.length > 1){
            throw new InputError();
        }

        arr.reverse();
    }

    return {
        reverseArr
    };

});


define(["../errors/command-parameter-error"], function (InputError) {

    function sortArr(arr, commandTokens) {

        if(commandTokens.length > 1){
            throw new InputError();
        }

        return arr.sort();
    }

    return {
        sortArr
    };

});
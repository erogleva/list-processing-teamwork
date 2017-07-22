define(["../errors/command-parameter-error"], function (InputError) {

    function prependArr(arr, commandTokens) {

        if(commandTokens.length !== 2){
            throw new InputError();
        }
        
        let theArray = arr.unshift(commandTokens[1]);
        return theArray;
    }

    return {
        prependArr
    };

});
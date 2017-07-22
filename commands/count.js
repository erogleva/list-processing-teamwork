define (["../errors/input-error"], function (inputError) {

    function countArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new inputError.InputError();
        }

        let element = commandTokens[1];

        return arr.filter(e => e === element).length;
    }

    return {
        countArr
    };

});
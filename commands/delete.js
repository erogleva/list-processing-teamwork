define (["../errors/input-error"], function (inputError) {

    function deleteArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new inputError.InputError();
        }

        let index = commandTokens[1];
        if(index < 0 || index >= arr.length){
            throw new inputError.InputError(`Error: Invalid index ${index}!`);
        }

        let theArray = arr.splice(index,1);
        return theArray;
    }

    return {
        deleteArr
    };
});
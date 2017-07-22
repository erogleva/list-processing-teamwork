define(["../errors/command-parameter-error"], function (InputError) {

    function deleteArr(arr, commandTokens) {
        
        if(commandTokens.length !== 2){
            throw new InputError();
        }

        let index = commandTokens[1];

        if(index < 0 || index >= arr.length){
            throw new InputError(`Error: Invalid index ${index}!`);
        }

        let theArray = arr.splice(index,1);
        return theArray;
    }

    return {
        deleteArr
    };
});
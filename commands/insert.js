define (["../errors/input-error"], function (inputError) {
    function insertArr(arr,commandTokens) {
        if(commandTokens.length!=3){
            throw new inputError.InputError();
        }
        let index = Number(commandTokens[1]);
        if(index>=0&&index<=arr.length-1){
            return arr.splice(index, 0, commandTokens[2]);
        }
        throw new inputError.InputError(`Error: invalid index ${index}`);
    }
    return {
      insertArr
    };

});
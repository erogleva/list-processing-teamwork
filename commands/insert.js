define ([], function () {
    function insertArr(arr,commandTokens) {
        if(commandTokens.length!=3){
            throw new Error ('Invalid parameters!');
        }
        let index = Number(commandTokens[1]);
        if(index>=0&&index<=arr.length-1){
            return arr.splice(index, 0, commandTokens[2]);
        }
        throw new Error(`invalid index ${index}`);
    }
    return {
      insertArr
    };

});
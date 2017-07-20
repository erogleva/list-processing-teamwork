define ([], function () {

    function countArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new Error ('Invalid parameters!');
        }

        let element = commandTokens[1];

        return arr.filter(e => e === element).length;
    }

    return {
        countArr
    };

});
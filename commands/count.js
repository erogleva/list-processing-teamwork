define(["../errors/command-parameter-error"], function (InputError) {

    function countArr(arr, commandTokens) {
        if(commandTokens.length !== 2){
            throw new InputError();
        }

        let element = commandTokens[1];

        return arr.filter(e => e === element).length;
    }

    return {
        countArr
    };

});
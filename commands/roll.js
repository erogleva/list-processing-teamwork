define (["../errors/input-error"], function (inputError) {

    function roll(array, commands) {

        if (commands.length === 1 || commands.length > 2) {
            throw new inputError.InputError();
        }

        let rollDirection = commands[1];

        if (rollDirection !== 'left' && rollDirection !== 'right') {
            throw new inputError.InputError();
        }

        let currArrElem;
        if (rollDirection === 'left') {
            currArrElem = array.shift();
            array.push(currArrElem);
        } else {
            currArrElem = array.pop();
            array.unshift(currArrElem);
        }
    }

    return {
        roll
    }
});

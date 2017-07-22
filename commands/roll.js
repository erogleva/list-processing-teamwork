define(["../errors/command-parameter-error"], function (InputError) {

    function roll(array, commands) {

        if (commands.length === 1 || commands.length > 2) {
            throw new InputError();
        }

        let rollDirection = commands[1];

        if (rollDirection !== 'left' && rollDirection !== 'right') {
            throw new InputError();
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

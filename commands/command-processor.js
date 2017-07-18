define(["./reverse",
    "./delete",
    "./roll",
    "./sort",
    "./count",
    "./prepend",
    "./insert",
    "./append"], (function (reverseArr, deleteArr, rollArr, sortArr, countArr, prependArr, insertArr) {

    function process(terminal, theArray, commandTokens) {

        let result;

        try {
            switch (commandTokens[0]) {
                case 'reverse':
                    result = reverseArr.reverseArr(theArray, commandTokens);
                    theArray = result.slice(0);
                    break;
                case 'append':
                    break;
                case 'prepend':
                    break;
                case 'insert':
                    break;
                case 'delete':
                    break;
                case 'roll':
                    result = rollArr.roll(theArray, commandTokens);
                    break;
                case 'sort':
                    break;
                case 'count':
                    break;
                case 'end':
                    break;
                default:
                    throw new Error('Invalid command!');
            }

            terminal.val(terminal.val() + theArray.join(' ') + '\n');

        } catch (err) {
            terminal.val(terminal.val() + err.message + '\n');
        }
    }

    return {
        process
    }
}));
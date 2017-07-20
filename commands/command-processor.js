define(["./reverse",
        "./delete",
        "./roll",
        "./sort",
        "./count",
        "./prepend",
        "./append",
        "./insert"], (function (reverseArr, deleteArr, rollArr, sortArr, countArr, prependArr, appendArr, insertArr) {

    function process(terminal, theArray, commandTokens) {

        let result;

        try {
            switch (commandTokens[0]) {
                case 'reverse':
                    result = reverseArr.reverseArr(theArray, commandTokens);
                    theArray = result.slice(0);
                    break;
                case 'delete':
                    result = deleteArr.deleteArr(theArray, commandTokens);
                    break;
                case 'roll':
                    result = rollArr.roll(theArray, commandTokens);
                    break;
                case 'sort':
                    break;
                case 'count':
                    result = countArr.countArr(theArray, commandTokens);
                    terminal.val(terminal.val() + result + '\n');
                    return;
                case 'prepend':
                    break;
                case 'append':
                    result = appendArr.appendArr(theArray, commandTokens);
                    break;
                case 'insert':
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
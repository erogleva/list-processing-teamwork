define(["./reverse",
        "./delete",
        "./roll",
        "./sort",
        "./count",
        "./prepend",
        "./append",
        "./insert",
        "./end",
        "../errors/input-command-error"], (function (reverseArr, deleteArr, rollArr, sortArr,
                                                    countArr, prependArr, appendArr,
                                                    insertArr,end,inputCommandError) {

    function process(terminal,input,button, theArray, commandTokens) {

        let result;

        try {
            switch (commandTokens[0]) {
                case 'reverse':
                    result = reverseArr.reverseArr(theArray, commandTokens);
                    break;
                case 'delete':
                    result = deleteArr.deleteArr(theArray, commandTokens);
                    break;
                case 'roll':
                    result = rollArr.roll(theArray, commandTokens);
                    break;
                case 'sort':
                    result = sortArr.sortArr(theArray, commandTokens);
                    break;
                case 'count':
                    result = countArr.countArr(theArray, commandTokens);
                    terminal.val(terminal.val() + result + '\n');
                    return;
                case 'prepend':
                    result = prependArr.prependArr(theArray,commandTokens);
                    break;
                case 'append':
                    result = appendArr.appendArr(theArray, commandTokens);
                    break;
                case 'insert':
                    result = insertArr.insertArr(theArray,commandTokens);
                    break;
                case 'end':
                    end.end(input,button);
                    terminal.val(terminal.val() + "Finished" + '\n');
                    return;
                default:
                    throw new inputCommandError.InputCommandError();
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
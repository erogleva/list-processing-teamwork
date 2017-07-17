define (["./commands/reverse",
    "./commands/delete",
    "./commands/roll",
    "./commands/sort",
    "./commands/count",
    "./commands/prepend",
    "./commands/insert",
    "./commands/append"], (function (reverseArr, deleteArr, rollArr, sortArr, countArr, prependArr, insertArr) {

    let theArray = [];
    let initialized = false;

    let terminal = $('#display');
    let inputCommands = $('#input-commands');
    $('#btn-enter').on('click', submit);
    inputCommands.on('keypress', (e) => e.which == 13 ? submit() : '');

    function submit() {
        let commandTokens = inputCommands.val().split(' ').filter((e) => e != ' ');
        if(!initialized){
            theArray = commandTokens.slice(0);
            terminal.val(theArray.join(' ') + '\n');
            initialized = true;
            inputCommands.val('');
            return;
        }

        switch(commandTokens[0]){
            case 'reverse':
                let result = reverseArr.reverseArr(theArray, commandTokens);
                if(Array.isArray(result)){
                    theArray = result.slice(0);
                    terminal.val(terminal.val() + theArray.join(' ') + '\n');
                } else {
                    terminal.val(terminal.val() + result + '\n');
                }
                inputCommands.val('');
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
                break;
            case 'sort':
                break;
            case 'count':
                break;
            case 'end':
                break;

            default: terminal.val(terminal.val() + 'Error: Invalid command!' + '\n');
                inputCommands.val('');
        }
    }
}));

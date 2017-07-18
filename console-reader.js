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
    inputCommands.on('keypress', (e) => e.which === 13 ? submit() : '');

    function submit() {
        let commandTokens = inputCommands.val().replace(/ {2,}/g, ' ' ).split(' ').filter((e) => e !== ' ');
        if(!initialized){
            theArray = commandTokens.slice(0);
            terminal.val(theArray.join(' ') + '\n');
            initialized = true;
            inputCommands.val('');
            return;
        }

        let result;

        try {
            switch(commandTokens[0]){
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
                default: throw new Error('Invalid command!');
                //inputCommands.val(''); // down after the switch, avoid code repeating
            }

            terminal.val(terminal.val() + theArray.join(' ') + '\n');

        } catch (err) {
            terminal.val(terminal.val() + err.message + '\n');
        }

        inputCommands.val('');
    }
}));

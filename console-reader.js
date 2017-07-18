define (["./commands/command-processor"], (function (commandProcessor) {

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

        commandProcessor.process(terminal, theArray, commandTokens);

        inputCommands.val('');
    }
}));

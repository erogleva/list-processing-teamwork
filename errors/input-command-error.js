define([], function () {

    class InputCommandError extends Error {
        constructor(message) {
            let defaultOrMessage = message || "Error: Invalid command!";
            super(defaultOrMessage);
        }
    }

    return {
        InputCommandError
    };

});
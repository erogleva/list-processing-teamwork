define ([], function () {
    class InputError extends Error{
        constructor(message){
            let defaultOrMessage = message||"Error: Invalid parameters!";
            super(defaultOrMessage);
        }
    }
    return {
        InputError
    };

});
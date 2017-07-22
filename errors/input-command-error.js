define ([], function () {

    return function InputCommandError(message) {
        this.name = this.constructor.name;
        this.message = message || "Error: Invalid command!";
        InputCommandError.prototype = Error.prototype;
    }

});
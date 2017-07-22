define ([], function () {

    return function InputError(message) {
        this.name = this.constructor.name;
        this.message = message || "Error: Invalid command!";
        InputError.prototype = Error.prototype;
    }

});
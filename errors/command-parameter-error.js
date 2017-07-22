define([], function () {

    return function InputError(message) {
        this.name = this.constructor.name;
        this.message = message || "Error: invalid command parameters";
        InputError.prototype = Error.prototype;
    }

});
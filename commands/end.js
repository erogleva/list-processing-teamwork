define ([], function () {

    function end(input,submit) {
        $(input).off('keypress');
        $(submit).off('click');
    }
    return {
        end
    };

});
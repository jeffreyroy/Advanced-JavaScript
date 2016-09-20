$(document).on('ready', function() {

    // This function overwrites jQuery $, that why the button does not work
    // ====== DON'T DELETE / DON'T CHANGE ====
    $ = function () {
        alert('jQuery is gone')
    };
    // ---------------------------------------



    // Without changing this event handler, re-allocated it into
    // a different scope. See hints below if needed.
    (function($) {
        $('#catch-me').on('click',function(){
            alert('jQ ing!')
        });
    } ) (jQuery);
});













    //Hint 1: Wrap the event handler in an IIFE to provide function scope that is
    //separate from the global scope.

    // (function(){
    //     ... original code here
    // })();

    //Hint 2: Pass in the jQuery object on invocation to the $ parameter so $
    //can be used inside the IIFE scope.

    // (function($){
    //     ... original code here - $ will be the jQuery object
    // })(jQuery);




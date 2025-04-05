// loader
window.onload = function(){
    setTimeout(function () {
        (function ($) { 
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 1150)
}
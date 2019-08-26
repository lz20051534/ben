
var changeLocale = function(langCode) {

    jQuery.i18n.properties({
        name: 'Locales', 
        path: 'locale/', 
        mode: 'both',
        language: langCode.replace('-', '_'),
        async: false,
        callback: function() {

            $('[data-locale-msg]').each(function() {

                $(this).html(window[$(this).data('locale-msg')]);
            });
        }
    });
}

$(document).ready(function() {

    var $langSelect = $('select[name=Language]');
    $langSelect.change(function(e) {

        changeLocale(e.target.value);
        $.cookie('ap_lang_code', e.target.value);
    });

    var langCode = $.cookie('ap_lang_code');
    if (langCode === undefined) {
        langCode = 'zh-TW';

        // get the language setting of browser, select 'english' if the setting locale doesn't belong to language options
        // langCode = navigator.language;

        // var result;
        // $('select[name=Language] > option').each(function() {

        //     if (langCode.startsWith($(this).val())) {
        //         result = $(this).val();
        //     }
        // });
        // if (result === undefined) {
        //     langCode = 'zh-TW';
        // } else {
        //     langCode = result;
        // }
    }

    $langSelect.val(langCode);
    $langSelect.change();

    
    
    $('body').ready(function() {
    $('body').addClass('trshow');
    });
});

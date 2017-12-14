$(document).ready(function() {
    $('#modal-content').apFullscreenModal({
        openSelector: '.modalbutton',
        backgroundColor: '#fafafa',
        closeSelector: '.close-modal, #send',
    });
    $('.js-example-basic-single').select2({
        theme: "flat"
    });

    $('.js-example-basic-multiple').select2({
        theme: "flat"
    });

    $("#singleSelectExample").select2({
        placeholder: 'Select an option...',
        theme: "flat",
        allowClear: true
    });
    $(".js-example-placeholder-single").select2({
        placeholder: 'Select an option...',
        theme: "flat",
        allowClear: true
    });

    $(".js-example-placeholder-multiple").select2({
        placeholder: "Select a option",
        theme: "flat"
    });
});
/*Select2 Initlization*/
$('.modal-content').change(
    function() {alert('something'); // ?
 });

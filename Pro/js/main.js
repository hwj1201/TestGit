$(document).ready(function () {
    $('#year_select').empty();
    var now = new Date;
    var year = now.getFullYear();
    for (var i = 0; i < 10; i++) {
        var tempYear = year - i;
        $('#year_select').append('<option value="' + tempYear + '">' + tempYear + '</option>');
    }
    $('#year_select').show();
})

var selectYear = $('#year_select').find("option:selected").text();
function saveYear() {
    window.parent.toStartView(); 
}
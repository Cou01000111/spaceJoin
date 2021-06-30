import $ from "jquery";
export function textProcess() {
    var text = $('#input-text').val();
    if (text != undefined) {
        $('#output-text').val(text.split('').join(' '));
    }
}

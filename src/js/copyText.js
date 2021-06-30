import $ from "jquery";
export function copyText() {
    console.log('push');
    // コピー内容を選択する.
    var txt = $('#output-text').val();
    if (txt && typeof (txt) != 'object' && typeof (txt) != 'number') {
        navigator.clipboard.writeText(txt);
    }
}

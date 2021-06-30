import $ from "jquery";
import { textProcess } from "./process.js";
import { copyText } from "./copyText.js";
console.log('hey!!');
$('#input-text').on('paste keydown', function (e) {
    textProcess();
});
$('#copy-button').on('click', function () { copyText(); });

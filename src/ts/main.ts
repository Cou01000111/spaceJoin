import $ from "jquery";
import { textProcess } from "./process.js";
import { copyText } from "./copyText.js";
console.log('hey!!');
$('#input-text').on('paste keydown', (e) => {
    textProcess();
});
$('#copy-button').on('click', () => { copyText() });

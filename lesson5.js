
function runCode(inputId, outputId) {
    var code = document.getElementById(inputId).value;
    var output = document.getElementById(outputId);
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '200px'; // Adjust as needed for content

    output.innerHTML = '';
    output.appendChild(iframe);

    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write('<style>' + code + '</style>');
    doc.close();
}

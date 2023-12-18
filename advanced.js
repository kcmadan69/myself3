function runCode(inputId, outputId) {
    const code = document.getElementById(inputId).value;
    const output = document.getElementById(outputId);
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '200px'; // Adjust as needed for content
    
    output.innerHTML = '';
    output.appendChild(iframe);
    
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
}

function navigatelesson(direction) {
    // Handle navigation logic here
}

function navigatelesson(direction) {
    if (direction === 'Next') {
        window.location.href = 'intro-to-java.html';
    }
    else if (direction === 'Previous') {
        window.location.href = 'styling.html';
    }
}
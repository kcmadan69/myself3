function runJavaScript(inputId, outputId) {
    var code = document.getElementById(inputId).value;
    var output = document.getElementById(outputId);

    try {
        // Use new Function() to run the JavaScript code
        new Function(code)();
        output.textContent = 'Code ran successfully, check console for output!';
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

function runJavaScript(inputId, outputId) {
    var code = document.getElementById(inputId).value;
    var output = document.getElementById(outputId);

    try {
        // Use new Function() to run the JavaScript code
        new Function(code)();
        output.textContent = 'Code ran successfully, check console for output!';
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

// Implement 'runJavaScript' function for each example section
function runJavaScript(inputId, outputId) {
    var code = document.getElementById(inputId).value;
    var output = document.getElementById(outputId);

    try {
        // Use new Function() to run the JavaScript code
        new Function(code)();
        output.textContent = 'Code ran successfully, check console for output!';
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

// Implement 'runJavaScript' function for each example section
function runJavaScript(inputId, outputId) {
    var code = document.getElementById(inputId).value;
    var output = document.getElementById(outputId);

    try {
        // Use new Function() to run the JavaScript code
        new Function(code)();
        output.textContent = 'Code ran successfully, check console for output!';
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

// Implement 'runJavaScript' function for each example section
function navigatelesson(direction) {
    if (direction === 'Next') {
        window.location.href = 'lesson5.html';
    }
    else if (direction === 'Previous') {
        window.location.href = 'advancedcss.html';
    }
}

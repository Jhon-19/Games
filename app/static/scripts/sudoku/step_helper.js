let stepButton = $('#stepBtn')[0]

function initApi(interpreter, globalObject) {
    // Add an API function for the alert() block, generated for "text_print" blocks.
    var wrapperAlert = function alert(text) {
        text = arguments.length ? text : '';
        // console.log(text)
    };
    interpreter.setProperty(globalObject, 'alert',
        interpreter.createNativeFunction(wrapperAlert));

    // Add an API function for the prompt() block.
    var wrapperPrompt = function prompt(text) {
        return window.prompt(text);
    };
    interpreter.setProperty(globalObject, 'prompt',
        interpreter.createNativeFunction(wrapperPrompt));

    // Add an API function for highlighting blocks.
    var wrapperHighlight = function (id) {
        id = String(id || '');
        return highlightBlock(id);
    };
    interpreter.setProperty(globalObject, 'highlightBlock',
        interpreter.createNativeFunction(wrapperHighlight));

    // Add an API function for setSudo function
    interpreter.setProperty(globalObject, 'setSudo',
        interpreter.createNativeFunction(wrapperSetSudo));

    // Add an API function for getSudo function
    interpreter.setProperty(globalObject, 'getSudo',
        interpreter.createNativeFunction(wrapperGetSudo));
}

var myInterpreter = null;
// Each step will run the interpreter until the highlightPause is true.
var highlightPause = false;

function highlightBlock(id) {
    workspace.highlightBlock(id);
    highlightPause = true;
}

function resetStepUi(clearOutput) {
    workspace.highlightBlock(null);
    highlightPause = false;

    if (clearOutput) {
        console.log('cleared.')
    }
    myInterpreter = null;
}

function stepCode() {
    if (!myInterpreter) {
        // First statement of this code.
        // Clear the program output.
        resetStepUi(true);
        var latestCode = Blockly.JavaScript.workspaceToCode(workspace);
        myInterpreter = new Interpreter(latestCode, initApi);

        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function () {
            highlightPause = true;
            stepCode();
        }, 1);
        return;
    }
    highlightPause = false;
    do {
        try {
            var hasMoreCode = myInterpreter.step();
        } finally {
            if (!hasMoreCode) {
                // Program complete, no more code to execute.
                // console.log('completed.');

                resetStepUi(false);

                // Cool down, to discourage accidentally restarting the program.
                stepButton.disabled = 'disabled';
                setTimeout(function () {
                    stepButton.disabled = '';
                }, 2000);

                return;
            }
        }
        // Keep executing until a highlight statement is reached,
        // or the code completes or errors.
    } while (hasMoreCode && !highlightPause);
}


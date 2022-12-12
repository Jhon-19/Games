let stepBtn = $('#stepBtn')[0];
let resetBtn = $('#resetBtn')[0];
let runBtn = $('#runBtn')[0];

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

    // Add an API function for enableBtns function
    interpreter.setProperty(globalObject, 'enableBtns',
        interpreter.createNativeFunction(wrapperEnableBtns));

    // Add an API function for autoSolve function
    interpreter.setProperty(globalObject, 'autoSolve',
        interpreter.createNativeFunction(wrapperAutoSolve));

    // Add an API function for autoSolveSteps function
    interpreter.setProperty(globalObject, 'basicSolve',
        interpreter.createNativeFunction(wrapperBasicSolve));

    // Add an API function for initSudo function
    interpreter.setProperty(globalObject, 'initSudo',
        interpreter.createNativeFunction(wrapperInitSudo));

    // Add an API function for judgeAccept function
    interpreter.setProperty(globalObject, 'judgeAccept',
        interpreter.createNativeFunction(wrapperJudgeAccept));

    // Add an API function for judgeAccept function
    interpreter.setProperty(globalObject, 'println',
        interpreter.createNativeFunction(wrapperPrintln));
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

    // if (clearOutput) {
    //     // console.log('cleared.')
    // }
    myInterpreter = null;
}

function stepCode() {
    if (!myInterpreter) {
        // First statement of this code.
        // Clear the program output.
        resetStepUi(true);
        var latestCode = Blockly.JavaScript.workspaceToCode(workspace);
        latestCode = 'initSudo();\n'+latestCode+'enableBtns();\n';
        myInterpreter = new Interpreter(latestCode, initApi);

        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function () {
            highlightPause = true;
            resetBtn.disabled = 'disabled';
            runBtn.disabled = 'disabled';
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
                stepBtn.disabled = 'disabled';
                setTimeout(function () {
                    stepBtn.disabled = '';
                }, 2000);

                return;
            }
        }
        // Keep executing until a highlight statement is reached,
        // or the code completes or errors.
    } while (hasMoreCode && !highlightPause);
}


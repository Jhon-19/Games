let sudoRows = $('.sudoRow');

let args = window.location.search
let level = '1';
if (args.length > 0) {
    level = args.replaceAll('?level=', '');
}
let level_int = parseInt(level);

let sudoMatrix0 = null;
if (level_int === 10) {
    $.ajax({
        url: '/auto_sudo',
        type: 'GET',
        success: (result) => {
            sudoMatrix0 = JSON.parse(result)['sudo_matrix'];
            wrapperInitSudo();
        }
    });
} else {
    sudoMatrix0 = levelMatrices[level];
}

let toolbox;
if (level_int >= 1 && level_int <= 2) {
    toolbox = levelToolbox.toolbox1;
} else if (level_int >= 3 && level_int <= 5) {
    toolbox = levelToolbox.toolbox2;
} else if (level_int === 6) {
    toolbox = levelToolbox.toolbox3;
} else {
    toolbox = levelToolbox.toolbox4;
}

let tipsTd = $('#tips');

let workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: true,
});

$.ajax({
    url: '/read_records',
    type: 'GET',
    success: (result) => {
        let record_levels = JSON.parse(result)['record_levels'];
        label_levels(record_levels);
        // console.log(record_levels);
    }
});

function label_levels(record_levels) {
    for (let i = 0; i < record_levels.length; i++) {
        let levelId = `#level${record_levels[i]}`;
        $(levelId).css('background', 'rgba(174,174,250,0.2)');
    }
}

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');

$('#runBtn').click(() => {
    let code = Blockly.JavaScript.workspaceToCode(Blockly.common.getMainWorkspace());
    code = 'initSudo();\n' + code + 'judgeAccept();\n';
    let myInterpreter = new Interpreter(code, initApi);
    try {
        myInterpreter.run();
    } catch (error) {
        console.log(error);
    }
});

$('#stepBtn').click(stepCode);

$('#resetBtn').click(() => {
    wrapperInitSudo();
});

workspace.addChangeListener(function (event) {
    if (!event.isUiEvent) {
        // Something changed.  Interpreter needs to be reloaded.
        resetStepUi(true);
    }
});

let wrapperInitSudo = function initSudo() {
    initTip();
    setSudoMatrix(sudoMatrix0);
}

if(sudoMatrix0 !== null){
    wrapperInitSudo();
}

function initTip() {
    tipsTd.text(levelTips[level]);
}

let tip_btn = $('#tip_btn');
let tip_mask = $('#tip_mask');
tip_btn.click(()=>{
    let tip_off = tip_mask.css('display');
    if(tip_off === 'none'){
        tip_mask.css('display', 'block');
        tip_btn.text('关闭');
    }else{
        tip_mask.css('display', 'none');
        tip_btn.text('提示');
    }
});

setTimeout(()=>{
    tip_mask.css('display', 'none');
}, 29000);
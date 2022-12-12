Blockly.defineBlocksWithJsonArray([
    {
        "type": "sudo_setter",
        "message0": "选择第 %1 行 %2 选择第 %3 列 %4 填入数字 %5",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "row",
                "options": [
                    [
                        "1",
                        "0"
                    ],
                    [
                        "2",
                        "1"
                    ],
                    [
                        "3",
                        "2"
                    ],
                    [
                        "4",
                        "3"
                    ],
                    [
                        "5",
                        "4"
                    ],
                    [
                        "6",
                        "5"
                    ],
                    [
                        "7",
                        "6"
                    ],
                    [
                        "8",
                        "7"
                    ],
                    [
                        "9",
                        "8"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "col",
                "options": [
                    [
                        "1",
                        "0"
                    ],
                    [
                        "2",
                        "1"
                    ],
                    [
                        "3",
                        "2"
                    ],
                    [
                        "4",
                        "3"
                    ],
                    [
                        "5",
                        "4"
                    ],
                    [
                        "6",
                        "5"
                    ],
                    [
                        "7",
                        "6"
                    ],
                    [
                        "8",
                        "7"
                    ],
                    [
                        "9",
                        "8"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "val",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ],
                    [
                        "4",
                        "4"
                    ],
                    [
                        "5",
                        "5"
                    ],
                    [
                        "6",
                        "6"
                    ],
                    [
                        "7",
                        "7"
                    ],
                    [
                        "8",
                        "8"
                    ],
                    [
                        "9",
                        "9"
                    ]
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 240,
        "tooltip": "将第x行第y列的元素设置为给定值",
        "helpUrl": ""
    },
    {
        "type": "sudo_setter_auto",
        "message0": "选择第 %1 行，选择第 %2 列，填入 %3",
        "args0": [
            {
                "type": "input_value",
                "name": "row",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "col",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "val",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "将第x行第y列的元素设置为给定值",
        "helpUrl": ""
    },
    {
        "type": "sudo_getter",
        "message0": "获取第 %1 行，第 %2 列的数字",
        "args0": [
            {
                "type": "input_value",
                "name": "row",
                "check": "Number",
            },
            {
                "type": "input_value",
                "name": "col",
                "check": "Number",
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "获取第x行第y列上的数字",
        "helpUrl": ""
    },
    {
        "type": "auto_solve",
        "message0": "自动求解数独",
        "colour": 135,
        "tooltip": "自动求解数独",
        "helpUrl": ""
    },
    {
        "type": "basic_solve",
        "message0": "教学提示",
        "colour": 210,
        "tooltip": "按照行、列、九宫格来推断出应填的数字",
        "helpUrl": ""
    },
    {
        "type": "println",
        "message0": "打印 %1",
        "args0": [
            {
                "type": "input_value",
                "name": "NAME"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 180,
        "tooltip": "打印变量",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['sudo_setter'] = function (block) {
    var dropdown_row = block.getFieldValue('row');
    var dropdown_col = block.getFieldValue('col');
    var dropdown_val = block.getFieldValue('val');
    // TODO: Assemble JavaScript into code variable.
    var code = `setSudo(${dropdown_row}, ${dropdown_col}, ${dropdown_val});\n`;
    return code;
};

Blockly.JavaScript['sudo_setter_auto'] = function (block) {
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
    var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
    var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `setSudo(${value_row - 1}, ${value_col - 1}, ${value_val});\n`;
    return code;
};

Blockly.JavaScript['sudo_getter'] = function (block) {
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
    var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `getSudo(${value_row}- 1, ${value_col}- 1)`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['auto_solve'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'autoSolve();\n';
    return code;
};

Blockly.JavaScript['basic_solve'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'basicSolve();\n';
    return code;
};

Blockly.JavaScript['println'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `println(${value_name});\n`;
    return code;
};

let wrapperPrintln = function println(value) {
    tipsTd.text(JSON.stringify(value));
}

let wrapperSetSudo = function setSudo(x, y, val) {
    let targetItem = sudoRows.eq(x).children('td').eq(y);
    if (!checkNum(targetItem)) {
        let data = {
            'sudo_matrix': getSudoMatrix(),
            'num_triple': [x + 1, y + 1, val]
        };
        if (x >= data['sudo_matrix'].length || y >= data['sudo_matrix'][0].length) {
            return;
        }
        judgeError(data);
        setSudoItem(targetItem, val);
    }
}

function judgeError(data) {
    $.ajax({
        url: '/judge_error',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (result) => {
            let judge_result = JSON.parse(result)['judge_result'];
            let z = judge_result[2];
            // console.log(judge_result);
            if (z !== -1) {
                let error_tip = '';
                if (parseInt(level) <= 6) {
                    console.log(judge_result);
                    error_tip = generateErrorTip6(
                        judge_result,
                        data['num_triple'],
                        data['sudo_matrix'][0].length
                    );
                } else {
                    error_tip = generateErrorTip(judge_result, data['num_triple']);
                }
                tipsTd.text(error_tip);
            }
        }
    })
}

function generateErrorTip6(judge_result, num_triple, col_length) {
    let x0 = num_triple[0];
    let y0 = num_triple[1];
    let index = (parseInt(x0) - 1) * col_length + parseInt(y0);
    let index_e = judge_result[1];
    return `警告：第${index}数字与第${index_e}个数字重复了……`;

}

function generateErrorTip(judge_result, num_triple) {
    let x0 = num_triple[0];
    let y0 = num_triple[1];
    let xe = judge_result[0];
    let ye = judge_result[1];
    let ze = judge_result[2];
    let error_type = '';
    if (ze === 0) {
        error_type = '行重复';
    } else if (ze === 1) {
        error_type = '列重复';
    } else {
        error_type = '九宫格内重复';
    }
    return `警告：第${x0}行第${y0}列的数字与第${xe}行第${ye}列的数字重复了(${error_type})……`;
}

function setSudoItem(targetItem, val) {
    targetItem.text(val);
    targetItem.css('background', '#519ef511');
    setTimeout(() => {
        targetItem.css('background', 'white');
    }, 300);
}

let wrapperGetSudo = function getSudo(x, y) {
    let targetItem = sudoRows.eq(x).children('td').eq(y);
    targetItem.css('background', 'rgb(99,231,243)');
    setTimeout(() => {
        targetItem.css('background', 'white');
    }, 300);
    let num = 0;
    if (targetItem.text().length !== 0) {
        num = parseInt(targetItem.text());
    }
    return num;
}

let wrapperEnableBtns = function enableBtns() {
    resetBtn.disabled = '';
    runBtn.disabled = '';
}

let wrapperAutoSolve = function autoSolve() {
    $.ajax({
        url: '/solve',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({'sudo_matrix': getSudoMatrix()}),
        success: (result) => {
            let solution = JSON.parse(result)['solution'];
            setSudoMatrix(solution);
            setTimeout(wrapperInitSudo, 5000);
            // console.log(solution);
        }
    })
}

let wrapperBasicSolve = function basicSolve() {
    $.ajax({
        url: '/solve_steps',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({'sudo_matrix': getSudoMatrix()}),
        success: (result) => {
            let solution_steps = JSON.parse(result)['solution_steps'];
            let time_step = 1000;
            setSudoMatrixSteps(solution_steps, time_step);
            setTimeout(wrapperInitSudo, (solution_steps.length + 5) * time_step);
            // console.log(solution_steps);
        }
    })
}

let wrapperJudgeAccept = function judgeAccept() {
    //check whether win or loss
    let data = {
        'sudo_matrix': getSudoMatrix(),
        'sudo_origin': sudoMatrix0,
        'level': level
    }
    $.ajax({
        url: '/judge_accept',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (result) => {
            setTimeout(() => {
                if (result === '-1') {
                    tipsTd.text('存在重复或无效的填写，可以尝试单步运行，检查错误……');
                } else if (result === '0') {
                    tipsTd.text('您已完成全部关卡！');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000);
                } else {
                    tipsTd.text('全部正确，即将来到前往下一关……');
                    setTimeout(() => {
                        window.location.href = `/sudoku?level=${result}`;
                    }, 3000);
                }
            }, 500);
        }
    })
}

function getSudoMatrix() {
    let currentSudo = JSON.parse(JSON.stringify(sudoMatrix0));
    for (let i = 0; i < currentSudo.length; i++) {
        for (let j = 0; j < currentSudo[0].length; j++) {
            let num = sudoRows.eq(i).children('td').eq(j).text();
            if (num.length === 0) {
                num = 0;
            } else {
                num = parseInt(num);
            }
            currentSudo[i][j] = num;
        }
    }
    return currentSudo;
}

function setSudoMatrix(sudoMatrix) {
    for (let i = 0; i < sudoMatrix.length; i++) {
        for (let j = 0; j < sudoMatrix[0].length; j++) {
            let num = sudoMatrix[i][j];
            let target_item = sudoRows.eq(i).children('td').eq(j);
            let num_str = '';
            if (num !== 0) {
                num_str = num + '';
            }
            setSudoItem(target_item, num_str);
        }
    }
}

function checkNum(targetItem) {
    let hasNum = true;
    if (targetItem.text().length !== 1 || targetItem.text() === '0') {
        hasNum = false;
    }
    return hasNum;
}

function setSudoMatrixSteps(solution_steps, time_step) {
    for (let i = 0; i < solution_steps.length; i++) {
        let num_triple = solution_steps[i];
        let x = num_triple[0] - 1;
        let y = num_triple[1] - 1;
        if (x < 0 || y < 0) {
            continue;
        }
        let num = num_triple[2];
        let target_item = sudoRows.eq(x).children('td').eq(y);
        let num_str = '';
        if (num !== 0) {
            num_str = num + '';
        }
        setTimeout(() => {
            setSudoItem(target_item, num_str);
        }, i * time_step);
    }
}
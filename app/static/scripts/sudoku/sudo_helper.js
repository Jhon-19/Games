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
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "col",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "获取第x行第y列上的数字",
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
    var code = `getSudo(${value_row - 1}, ${value_col - 1})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

let sudoRows = $('.sudoRow');
sudoRows.children().addClass('text-center');

let wrapperSetSudo = function setSudo(x, y, val) {
    let targetItem = sudoRows.eq(x).children('td').eq(y);
    if (targetItem.text().length !== 1 || targetItem.text() === '0') {
        targetItem.text(val);
        targetItem.css('background', '#519ef511');
        setTimeout(() => {
            targetItem.css('background', 'white');
        }, 300);
    }
}

let wrapperGetSudo = function getSudo(x, y) {
    let targetItem = sudoRows.eq(x).children('td').eq(y);
    return targetItem.text()
}
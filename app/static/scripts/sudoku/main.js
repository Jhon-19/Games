const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle":"procedure_category",
            'contents': [
                {
                    'kind': 'block',
                    'type': 'sudo_setter'
                },
                {
                    'kind': 'block',
                    'type': 'sudo_setter_auto'
                },
                {
                    'kind': 'block',
                    'type': 'sudo_getter'
                },
            ]
        },
        {
            "kind": "sep"
        },
        {
            "kind": "category",
            "name": "逻辑工具",
            "categorystyle": "logic_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "logic_compare"
                },
                {
                    "kind": "block",
                    "type": "logic_operation"
                },
                {
                    "kind": "block",
                    "type": "logic_boolean"
                },
                {
                    "kind": "block",
                    "type": "logic_negate"
                },
                {
                    "kind": "block",
                    "type": "controls_if"
                },
                {
                    "kind": "block",
                    "type": "logic_ternary"
                },
            ]
        },
        {
            "kind": "category",
            "name": "数学工具",
            "categorystyle":"math_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number",
                    "fields": {
                        "NUM": 1
                    }
                },
                {
                    "kind": "block",
                    "type": "math_arithmetic",
                    "fields": {
                        "OP": "ADD"
                    }
                },
                {
                    "kind": "block",
                    "type": "math_on_list",
                    "extraState": "<mutation op=\"SUM\"></mutation>",
                    "fields": {
                        "OP": "SUM"
                    }
                },
            ]
        },
        {
            "kind": "category",
            "name": "循环工具",
            "categorystyle": "loop_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_repeat_ext",
                    "inputs": {
                        "TIMES": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                },
                {
                    "kind": "block",
                    "type": "controls_for",
                    "fields": {
                        "VAR": "i"
                    },
                    "inputs": {
                        "FROM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "TO": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        },
                        "BY": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "controls_forEach"
                },
                {
                    "kind": "block",
                    "type": "controls_flow_statements"
                }
            ]
        },
        {
            "kind": "sep"
        },
        {
            "kind": "category",
            "name": "列表",
            "categorystyle": "list_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_empty"
                },
                {
                    "kind": "block",
                    "type": "lists_create_with",
                    "extraState": {
                        "itemCount": 3
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_repeat",
                    "inputs": {
                        "NUM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 5
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf",
                    "fields": {
                        "END": "FIRST"
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex",
                    "fields": {
                        "MODE": "GET",
                        "WHERE": "FROM_START"
                    }
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex",
                    "fields": {
                        "MODE": "SET",
                        "WHERE": "FROM_START"
                    }
                }
            ]
        },
        {
            "kind": "category",
            "name": "变量",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },
    ]
}

let workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: true,
});

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');

$('#runBtn').click(() => {
    let code = Blockly.JavaScript.workspaceToCode(Blockly.common.getMainWorkspace());
    let myInterpreter = new Interpreter(code, initApi);
    try {
        myInterpreter.run();
    } catch (error) {
        console.log(error);
    }
});

$('#stepBtn').click(stepCode);

$('#resetBtn').click(()=>{

});

workspace.addChangeListener(function (event) {
    if (!event.isUiEvent) {
        // Something changed.  Interpreter needs to be reloaded.
        resetStepUi(true);
    }
});
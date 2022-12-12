let level1 = [[3, 0, 1]];
let level2 = [[2], [1], [0]];
let level3 = [[2, 3, 9, 0, 7, 4, 1, 8, 5]];
let level4 = [[8], [9], [1], [4], [5], [6], [0], [7], [3]];
let level5 = [
    [4, 7, 8],
    [0, 6, 1],
    [3, 5, 2]
];
let level6 = [
    [0, 0, 4],
    [0, 5, 0],
    [6, 1, 0]
];
let level7 = [
    [3, 1, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 7, 0, 9],
    [8, 0, 0, 0, 1, 0, 0, 0, 6],
    [0, 0, 1, 6, 0, 0, 4, 0, 5],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [7, 0, 6, 0, 0, 8, 2, 0, 0],
    [4, 0, 0, 0, 9, 0, 0, 0, 8],
    [6, 0, 2, 3, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 7, 9, 0, 0]
];
let level8 = [
    [0, 8, 4, 9, 5, 1, 7, 3, 6],
    [1, 5, 9, 6, 7, 3, 2, 8, 4],
    [3, 6, 7, 4, 8, 2, 1, 9, 5],
    [5, 7, 2, 8, 3, 6, 4, 1, 9],
    [8, 9, 3, 7, 1, 4, 6, 5, 2],
    [6, 4, 1, 2, 9, 5, 3, 7, 8],
    [7, 3, 6, 5, 4, 8, 9, 2, 1],
    [4, 1, 5, 3, 2, 9, 8, 6, 7],
    [9, 2, 8, 1, 6, 7, 5, 4, 3]
];
let level9 = [
    [0, 8, 4, 9, 5, 1, 7, 3, 6],
    [1, 5, 9, 6, 7, 3, 2, 8, 4],
    [3, 6, 7, 4, 8, 2, 1, 9, 5],
    [5, 7, 2, 8, 3, 6, 4, 1, 9],
    [8, 9, 3, 7, 1, 4, 6, 5, 2],
    [6, 4, 1, 2, 9, 5, 3, 7, 8],
    [7, 3, 6, 5, 4, 8, 9, 2, 1],
    [4, 1, 5, 3, 2, 9, 8, 6, 7],
    [9, 2, 8, 1, 6, 7, 5, 4, 3]
];
let level10 = [
    [0, 8, 4, 9, 5, 1, 7, 3, 6],
    [1, 5, 9, 6, 7, 3, 2, 8, 4],
    [3, 6, 7, 4, 8, 2, 1, 9, 5],
    [5, 7, 2, 8, 3, 6, 4, 1, 9],
    [8, 9, 3, 7, 1, 4, 6, 5, 2],
    [6, 4, 1, 2, 9, 5, 3, 7, 8],
    [7, 3, 6, 5, 4, 8, 9, 2, 1],
    [4, 1, 5, 3, 2, 9, 8, 6, 7],
    [9, 2, 8, 1, 6, 7, 5, 4, 3]
];

let levelMatrices = {
    '1': level1,
    '2': level2,
    '3': level3,
    '4': level4,
    '5': level5,
    '6': level6,
    '7': level7,
    '8': level8,
    '9': level9,
    '10': level10
}

let tip1 = '上面表格中缺失的数字是1、2、3中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。';
let tip2 = '上面表格中缺失的数字是1、2、3中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。';
let tip3 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。';
let tip4 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。';
let tip5 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。';
let tip6 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中其他数字不重复。(附加：且满足每行、每列、对角线之和均为15)';
let tip7 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中每行、每列、每个九宫格中的其他数字不重复。';
let tip8 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中每行、每列、每个九宫格中的其他数字不重复。';
let tip9 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中每行、每列、每个九宫格中的其他数字不重复。';
let tip10 = '上面表格中缺失的数字是1~9中的某一个，请使用积木块将其填充完整，保证与表格中每行、每列、每个九宫格中的其他数字不重复。';

let levelTips = {
    '1': tip1,
    '2': tip2,
    '3': tip3,
    '4': tip4,
    '5': tip5,
    '6': tip6,
    '7': tip7,
    '8': tip8,
    '9': tip9,
    '10': tip10,
}

const toolbox1 = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle": "procedure_category",
            'contents': [
                {
                    'kind': 'block',
                    'type': 'sudo_setter'
                },
            ]
        }
    ]
};

const toolbox2 = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle": "procedure_category",
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
                }
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
                    "type": "controls_if"
                },
            ]
        },
        {
            "kind": "category",
            "name": "数学工具",
            "categorystyle": "math_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number",
                    "fields": {
                        "NUM": 1
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
                                    "NUM": 9
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
                                    "NUM": 9
                                }
                            }
                        }
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

const toolbox3 = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle": "procedure_category",
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
                }
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
                    "type": "controls_if"
                },
            ]
        },
        {
            "kind": "category",
            "name": "数学工具",
            "categorystyle": "math_category",
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
                                    "NUM": 9
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
                                    "NUM": 9
                                }
                            }
                        }
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

const toolbox4 = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle": "procedure_category",
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
                {
                    'kind': 'block',
                    'type': 'auto_solve'
                },
                {
                    'kind': 'block',
                    'type': 'basic_solve'
                }
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
                    "type": "controls_if"
                },
            ]
        },
        {
            "kind": "category",
            "name": "数学工具",
            "categorystyle": "math_category",
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
                                    "NUM": 9
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
                                    "NUM": 9
                                }
                            }
                        }
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

const toolboxAll = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': '数独工具',
            "categorystyle": "procedure_category",
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
                {
                    'kind': 'block',
                    'type': 'auto_solve'
                },
                {
                    'kind': 'block',
                    'type': 'basic_solve'
                }
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
            "categorystyle": "math_category",
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
                                    "NUM": 9
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

let levelToolbox = {
    'toolbox1': toolbox1,
    'toolbox2': toolbox2,
    'toolbox3': toolbox3,
    'toolbox4': toolbox4
}
from . import main
from flask import request
from .sudoku.solve import solve
import json
from .sudoku.judgeRepeat import exclusion
from .sudoku.judgeError import judgeError as judge_error
from flask_login import login_required, current_user
import numpy as np
from .sudoku.judgeAccept_6 import judgeAcceptfifteen, judgeAcceptThree, judgeAcceptNine
from .sudoku.judgeRepeat_6 import judgeRepeatNine, judgeRepeatThree
from ..models import db
from .sudoku.generate import getSudoku


@main.route('/read_records', methods=['GET'])
def sudo_read_records():
    init_accepted_levels()
    return json.dumps({'record_levels': list(accepted_levels)})

@main.route('/judge_error', methods=['POST'])
@login_required
def sudo_judge_error():
    data = request.json
    sudo_matrix = data['sudo_matrix']
    num_triple = data['num_triple']
    i, j, v = num_triple

    temp_matrix = np.array(sudo_matrix)
    if temp_matrix.size == 9 * 9:
        judge_result = list(judge_error(sudo_matrix, i, j, v))  # (x, y, z)
    else:
        col_length = len(sudo_matrix[0])
        index = (i - 1) * col_length + j
        temp_matrix = temp_matrix.reshape(-1)
        if temp_matrix.size == 3:
            temp_result = judgeRepeatThree(temp_matrix, index, v)
        elif temp_matrix.size == 9:
            temp_result = judgeRepeatNine(temp_matrix, index, v)
        else:
            temp_result = -1
        if temp_result == -1:
            judge_result = [0, 0, -1]
        else:
            judge_result = [1, temp_result, 0]
    return json.dumps({'judge_result': judge_result})


@main.route('/solve', methods=['POST'])
@login_required
def sudo_solve():
    data = request.json
    sudo_matrix = data['sudo_matrix']
    solution = solve(sudo_matrix)
    return json.dumps({'solution': solution})


@main.route('/solve_steps', methods=['POST'])
@login_required
def sudo_solve_steps():
    data = request.json
    sudo_matrix = data['sudo_matrix']
    solution_steps = exclusion(sudo_matrix).tolist()
    return json.dumps({'solution_steps': solution_steps})


@main.route('/auto_sudo', methods=['GET'])
@login_required
def auto_sudo():
    sudo_matrix, _ = getSudoku()
    return json.dumps({'sudo_matrix': sudo_matrix.tolist()})


accepted_levels = set()


@main.route('/judge_accept', methods=['POST'])
@login_required
def judge_accept():
    data = request.json
    sudo_matrix = data['sudo_matrix']
    sudo_origin = data['sudo_origin']
    level = data['level']

    temp_matrix = np.array(sudo_matrix)
    # -1: wrong;
    # 0: finish game;
    # 1~10: remain game level

    if int(level) == 6:
        num = judgeAcceptfifteen(temp_matrix.reshape(-1))
        result = judge_by_num(num, level)
    else:
        if temp_matrix.size == 9 * 9:
            result = judge_sudo(sudo_matrix, sudo_origin, level)
        elif temp_matrix.size == 3:
            num, _ = judgeAcceptThree(temp_matrix.reshape(-1))
            result = judge_by_num(num, level)
        elif temp_matrix.size == 9:
            num, _ = judgeAcceptNine(temp_matrix.reshape(-1))
            result = judge_by_num(num, level)
        else:
            result = '-1'
    return result


def init_accepted_levels():
    if current_user.sudo_levels is not None:
        sudo_levels = json.loads(current_user.sudo_levels)
        accepted_levels.update(sudo_levels)


def judge_sudo(sudo_matrix, sudo_origin, level):
    solution = solve(sudo_origin)
    result = '-1'
    if sudo_matrix == solution:
        result = judge_next_level(level)
    return result


def judge_by_num(num, level):
    if num == 0:
        result = judge_next_level(level)
    else:
        result = '-1'
    return result


def judge_next_level(level):
    accepted_levels.add(level)
    current_user.sudo_levels = json.dumps(list(accepted_levels))
    db.session.add(current_user)
    db.session.commit()
    if len(accepted_levels) == 10:
        result = '0'
    else:
        next_level = int(level) + 1
        if next_level > 10:
            next_level = 1
        while str(next_level) in accepted_levels:
            next_level += 1
            if next_level > 10:
                next_level = 1
        result = str(next_level)
    return result

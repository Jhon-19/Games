from . import main
from flask import request

@main.route('/judge_error', methods=['POST'])
def judge_error():
    data = request.json
    return ''

@main.route('/solve', methods=['POST'])
def solve():
    data = request.data
    return ''
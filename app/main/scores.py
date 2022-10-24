from . import main
from flask_login import login_required
from datetime import datetime, timedelta
from flask import request, make_response
import json

score_dict = {}

@main.route('/record', methods=['POST'])
@login_required
def record():
    data = request.json
    key_list = data['key_list']

    # time_list = score_dict.setdefault(game, [])
    # time_list.append(datetime.now())
    


    return 'data recorded.'


def parse_key_list(key_list):
    pass
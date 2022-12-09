from flask import render_template, redirect, request
from . import main
from flask_login import login_required


@main.route('/')
@login_required
def index():
    return render_template('index.html')

@main.route('/sudoku')
@login_required
def sudoku():
    level = request.args.get('level', 1, type=int)
    return render_template('sudoku/sudoku_base.html', level=level)
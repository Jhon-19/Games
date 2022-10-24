from flask import render_template, redirect
from . import main
from flask_login import login_required
from config import basedir


@main.route('/')
def index():
    # return render_template('blocky_games/index.html')
    return redirect(f'{basedir}/app/blocky_games/index.html')
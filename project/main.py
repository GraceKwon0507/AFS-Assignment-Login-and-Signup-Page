from flask import Flask, render_template, request, redirect
from flask_login import current_user, login_user, login_required, logout_user
from models import db, login, UserModel

app = Flask(__name__)
app.secret_key = 'xyz'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///credentials.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
login.init_app(app)
login.login_view = 'login'


@app.before_first_request
def create_table():
    db.create_all()


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        user = UserModel.query.filter_by(email=email).first()
        if user is not None:
            login_user(user)
#            return redirect('/blogs')

#    return render_template('login.html')


@app.route('/register', methods=['POST', 'GET'])
def register():
    if current_user.is_authenticated:
        return redirect('/blogs')

    if request.method == 'POST':
        email = request.args.get('email', None)
        firstName = request.args.get('firstName', None)
        lastName = request.args.get('lastName', None)

        if UserModel.query.filter_by(email=email).first():
            return 'Email already present'

        user = UserModel(email=email, firstName=firstName, lastName=lastName)
        db.session.add(user)
        db.session.commit()
        return redirect('/login')
#    return render_template('register.html')


@app.route('/logout')
def logout():
    logout_user()
    return redirect('/blogs')


app.run(host='localhost', port=5000)

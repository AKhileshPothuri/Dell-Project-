
from flask import Flask,jsonify
from sklearn.externals import joblib

import pandas as pd
app = Flask(__name__)
@app.route('/predict', methods=['POST'])
def predict():
     regressor.predict([[10,4]])
if __name__ == '__main__':
     regressor = joblib.load('model.pkl')
     app.run(port=8080)
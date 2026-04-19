from flask import Flask, request, jsonify
from sklearn.ensemble import IsolationForest
import numpy as np

app = Flask(__name__)
model = IsolationForest(contamination=0.05)

@app.route("/predict", methods=["POST"])
def predict():
    d = request.json

    X = np.array([[d["risk"], d["eventRate"], d["money"], d["items"]]])
    anomaly = model.fit_predict(X)[0] == -1

    return jsonify({"anomaly": bool(anomaly)})

app.run(port=5000)
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import prompt_generator
import stability
import base64
app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes
data = {}

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    assets = prompt_generator.extract_keywords(data.get("gameIdea"), int(data.get("numberOfAssets")))
    print(assets)
    stability.createImage(assets)
    json_data = []
    return jsonify(json_data)



if __name__ == '__main__':
    app.run(debug=True)


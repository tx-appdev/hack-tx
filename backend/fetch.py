from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import json
import prompt_generator
import stability
import base64
import os
import zipfile
from io import BytesIO
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

@app.route('/download-images', methods=['GET'])
def download_images():
    image_folder = 'client-next/public'  # Update to your images folder path
    zip_filename = "images.zip"
    
    # Create an in-memory zip file
    zip_buffer = BytesIO()
    with zipfile.ZipFile(zip_buffer, "w") as zf:
        for filename in os.listdir(image_folder):
            filepath = os.path.join(image_folder, filename)
            if os.path.isfile(filepath):
                zf.write(filepath, arcname=filename)
    
    zip_buffer.seek(0)

    # Send the zip file as a downloadable response
    return send_file(zip_buffer, as_attachment=True, download_name=zip_filename, mimetype='application/zip')

if __name__ == '__main__':
    app.run(debug=True)


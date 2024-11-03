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
    images_data = []
    
    for i in range(0, int(data.get("numberOfAssets"))):
        image_file = f'generated_image_{i}.png'
        with open(image_file, 'rb') as img_file:
        # Encode image to Base64
            encoded_string = base64.b64encode(img_file.read()).decode('utf-8')
         # Append image data to the list
        images_data.append({
        'file_name': image_file,  # Original path or file name
        'image_data': encoded_string  # Base64 encoded image data
        })
        
    json_data = {
        'images': images_data
    }
    return jsonify(json_data)



if __name__ == '__main__':
    app.run(debug=True)


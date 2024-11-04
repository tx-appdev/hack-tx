import requests
import os
import base64

api_key = os.getenv("STABILITY_API_KEY")
url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "text_prompts": [{"text": f"A beautiful pixel art of a large fantasy world, drawing in the form of a landscape with paints"}],
    "cfg_scale": 9,
    "steps": 50,
    "width": 512,
    "height": 512
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    response_data = response.json()
    if 'artifacts' in response_data and len(response_data['artifacts']) > 0:
        if 'base64' in response_data['artifacts'][0]:
            image_base64 = response_data['artifacts'][0]['base64']
            image_data = base64.b64decode(image_base64)
            filename = f"client-next/public/generated_image_67.png"
            with open(filename, "wb") as f:
                f.write(image_data)
            print(f"Saved image: {filename}")

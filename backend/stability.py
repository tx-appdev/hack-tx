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
    "text_prompts": [{"text": "A pixel art sprite of a knight, 8-bit style, low resolution, 32x32 pixels, retro video game character with head, body, legs. Remove the ground so it's just the character."}],
    "cfg_scale": 7,
    "steps": 50,
    "width": 512,
    "height": 512
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    response_data = response.json()
    if 'artifacts' in response_data and len(response_data['artifacts']) > 0:
        image_base64 = response_data['artifacts'][0]['base64']
        image_data = base64.b64decode(image_base64)
        with open("generated_image.png", "wb") as f:
            f.write(image_data)
        print("Image generated and saved as generated_image.png")
        
    else:
        print("No image data found in response.")
else:
    print(f"Error: {response.status_code}, {response.text}")

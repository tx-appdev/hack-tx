import requests
import os
import base64
import prompt_generator

api_key = os.getenv("STABILITY_API_KEY")
url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

def createImage(assets):
    for i, asset in enumerate(assets):
        data = {
            "text_prompts": [{"text": f"A pixel art sprite of a {asset}. retro video game style. Make the images focused only on a singular thing"}],
            "cfg_scale": 7,
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
                    filename = f"client-next/public/generated_image_{i}.png"
                    with open(filename, "wb") as f:
                        f.write(image_data)
                    print(f"Saved image: {filename}")
                else:
                    print(f"Base64 data not found for asset: {asset}")
            else:
                print(f"No image data found in response for asset: {asset}")
        else:
            print(f"Error for asset {asset}: {response.status_code}, {response.text}")
    
    print("Image generation completed.")

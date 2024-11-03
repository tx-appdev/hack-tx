import requests
import os
import base64
import prompt_generator

# Get assets list from prompt generator
assets = prompt_generator.getAssets()
api_key = os.getenv("STABILITY_API_KEY")

# Define the base URL and headers for Stability API
url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# Loop over assets to generate images
for i, asset in enumerate(assets):
    # Prepare data payload for each asset
    data = {
        "text_prompts": [{"text": f"A pixel art sprite of a {asset}, 8-bit style, low resolution, 32x32 pixels, retro video game character with head, body, legs. Remove the ground so it's just the character."}],
        "cfg_scale": 7,
        "steps": 50,
        "width": 512,
        "height": 512
    }

    # Send the request
    response = requests.post(url, headers=headers, json=data)
    
    # Check response status
    if response.status_code == 200:
        response_data = response.json()
        # Check if response has the required 'artifacts' field
        if 'artifacts' in response_data and len(response_data['artifacts']) > 0:
            image_base64 = response_data['artifacts'][0]['base64']
            image_data = base64.b64decode(image_base64)
            # Save the image with a unique filename
            with open(f"generated_image_{i}.png", "wb") as f:
                f.write(image_data)
            print(f"Image generated and saved as generated_image_{i}.png")
        else:
            print("No image data found in response.")
    else:
        print(f"Error: {response.status_code}, {response.text}")

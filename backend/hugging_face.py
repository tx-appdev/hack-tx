from diffusers import StableDiffusionPipeline
import torch
from huggingface_hub import login

# Login to Hugging Face with your API token
login("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")

# Load the model, specifying 32-bit precision for CPU
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float32)
pipe.to("cpu")  # Ensure the model runs on CPU

# Define a lower-resolution prompt for a retro-style image
prompt = "A pixel art sprite of a knight, 8-bit style, low resolution, 32x32 pixels, retro video game character with head, body, legs. Remove the ground so it's just the character."

image = pipe(prompt, height=32, width=32).images[0]
image.save("small_sprite.png")

from diffusers import StableDiffusionPipeline
import torch
from huggingface_hub import login

# Login to Hugging Face with your API token
login("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")

# Load the Stable Diffusion model and move it to the GPU
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe.to("cuda")  # This moves the model to the GPU

# Define a lower-resolution prompt for a retro-style image
prompt = "A pixel art sprite of a knight, 8-bit style, low resolution, 32x32 pixels, retro video game character with head, body, legs. Remove the ground so it's just the character."

image = pipe(prompt).images[0]
image.save("small_sprite.png")

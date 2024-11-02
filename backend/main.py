import numpy as np
import tensorflow as tf
from transformers import GPT2Tokenizer, TFGPT2LMHeadModel

class GPTWrapper:
    def __init__(self, model_name='gpt2'):
        # Load pre-trained model and tokenizer
        self.tokenizer = GPT2Tokenizer.from_pretrained(model_name)
        self.model = TFGPT2LMHeadModel.from_pretrained(model_name)

    def generate_text(self, prompt, max_length=50):
        # Encode the input prompt
        input_ids = self.tokenizer.encode(prompt, return_tensors='tf')
        
        # Generate text
        output = self.model.generate(input_ids, max_length=max_length, num_return_sequences=1)
        
        # Decode the generated text
        generated_text = self.tokenizer.decode(output[0], skip_special_tokens=True)
        
        return generated_text

# Example usage
if __name__ == "__main__":
    gpt = GPTWrapper()
    prompt = "Once upon a time in a land far away"
    generated_text = gpt.generate_text(prompt)
    print(generated_text)

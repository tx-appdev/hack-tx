import openai
import os

# Retrieve the key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_keywords(theme, number):
    messages = [
    {"role": "system", "content": "You are a helpful assistant for generating theme-based keywords and assets for a retro video game."},
    {"role": "user", "content": f"For a retro video game with the theme '{theme}', suggest:\n"
                                 "1. A main character related to this theme, like a person or creature central to the setting (limit to 3 words).\n"
                                 "2. An object that can appear repeatedly in the scene (limit to 3 words).\n"
                                 "3. A type of landscape that would be common in this theme (limit to 3 words).\n"
                                 f"4. A list of exactly '{number}' assets that also go along with the theme, with each asset being no more than 3 words per item.\n\n"
                                 "Please keep answers brief and adhere to the word limit for each item and don't use specifiers, ex: don't use: '**Assets List:**' or '1. ' or '- '. No gaps between response. No commas"}
    ]




    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=messages,
        max_tokens=600,
        temperature=0.7
    )

    # Extract and format response
    keywords = response['choices'][0]['message']['content'].strip()
    return keywords

# Test the function

def getAssets():
    return assetList

keyWord = input("a theme: ") # Replace with bar thingy
numAssets = int(input("a num: ")) # Replace with bar thingy
assets = extract_keywords(keyWord, numAssets).strip()
assetList = assets.split("\n")


print(assetList)

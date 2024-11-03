import requests
import json
import matplotlib as plt

a = input("Enter a red:: ")
b = input("Enter a green:: ")
c = input("Enter a blue:: ")
r = int(a)
g = int(b)
b = int(c)

# Prepare the API endpoint and payload
url = 'http://colormind.io/api/'
payload = {
    "input": [
        [r, g, b],
        "N",
        "N",
        "N",
        [255 - r, 255 - g, 255 - b]
    ],
    "model": "default"
}

# Normalize RGB values to [0, 1] for Matplotlib
normalized_colors = [[c / 255 for c in color] for color in payload]

# Create a plot to visualize the colors
plt.figure(figsize=(8, 4))
for i, color in enumerate(normalized_colors):
    plt.fill_between([i, i + 1], 0, 1, color=color)

plt.xlim(0, len(normalized_colors))
plt.axis('off')  # Hide axes
plt.title('Color Visualization', fontsize=16)
plt.show()
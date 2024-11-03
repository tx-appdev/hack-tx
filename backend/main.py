import requests
import json
import matplotlib.pyplot as plt

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
        "N" #[255 - r, 255 - g, 255 - b]
    ],
    "model": "default"
}

# Send the POST request
response = requests.post(url, data=json.dumps(payload), headers={'Content-Type': 'application/json'})

# Check the response status code
if response.status_code == 200:
    color_data = response.json()
    colors = color_data.get('result')
    
    if colors:
        print("Colors:", colors)
    else:
        print("No colors found in the response.")
else:
    print("Error:", response.status_code, response.text)





#ask user if they want light or dark mode
light_mode = True


bg_color = [0, 0, 0]
acc_color = [255, 255, 255]
bgi = 0
acci = 0

for index, color in enumerate(colors):
    low = sum(color)
    acc = sum(acc_color)
    high = 255 * 3 - sum(color)
    bg = 255 * 3 - sum(bg_color)
    if(low < acc):
        acc_color = color
        acci = index
    if(high > bg):
        bg_color = color
        bgi = index

if(not light_mode):
    temp = bg_color
    bg_color = acc_color
    acc_color = temp
    

print(bgi)
print(acci)

normalized_colors = [[c / 255 for c in color] for color in colors]

# Create a plot to visualize the colors
plt.figure(figsize=(8, 4))
for i, color in enumerate(normalized_colors):
    plt.fill_between([i, i + 1], 0, 1, color=color)

plt.xlim(0, len(normalized_colors))
plt.axis('off')  # Hide axes
plt.title('Color Visualization', fontsize=16)
plt.show()


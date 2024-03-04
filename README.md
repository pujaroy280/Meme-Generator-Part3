# Meme-Generator-Part3

## About
This project is a React meme generator developed from the Scrimba tutorial series. It allows users to generate random memes by clicking a button. Another feature present in this app allows the user to type in the form inputs which then generates text from the top and bottom of the meme. In this part of the project, we need to add an actual API call to this project to retrieve the meme images.

✨Adding another method of making an API Call
We need to create a new branch in this repo name usequery
We need to make an API call to the same endpoint to get the meme images 
We have to use the @tanstack/react-query package and the hook useQuery that comes from the package
We also need to replace the useEffect API call with the useQuery API call, so we need to remove the useEffect API call in the usequery branch 

![image](https://github.com/pujaroy280/Meme-Generator-Part2/assets/62675121/dc0d7696-463e-4500-8caa-a98ea82cd3eb)

## Technologies
- React
- Vite
- HTML
- CSS
- Node.js

IDE: Visual Studio Code

## Getting Started
The Meme Generator Web app currently displays a header, a meme image, and a button. When a user clicks the button, a random meme image is displayed from an API. The user can also type in the form input fields for text to appear in the top and bottom of the meme.

## Installation
To install and run the project:

1. Clone this repository:
```
git clone https://github.com/pujaroy280/Meme-Generator-Part3.git
```

2. Navigate to the project directory:
```
cd meme-generator
```

3. Install dependencies:
```
npm install
```
4. Run the development server:
```
npm run dev
```
5. Open your browser and navigate to the localhost running.
```
http://localhost:3000/
```

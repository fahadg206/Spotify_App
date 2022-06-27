# Spotify Application

- A spotify clone that allows a user to search for their favorite artists and songs. 

## Project Goals

- This project allowed me to get practice using an API that needed Authentication. I had to go through the CLient Credentials Flow to get access to this Spotify API. I was then given an access token so that I could go ahead and make GET requests. 

## How the app works 

- There is a search bar for the user to search any track they would like. Each track has the track name, the album that track was apart of, and the duration of the song. When the track is clicked on, the app will redirect the user to the actual spotify website to listen to the song in a new tab. 


## Technologies Used 

- React, Spotify API, JavaScript, HTML, CSS, Axios


# Quick Start
- Download zip file or clone the repository on your local machine, and open it up in your code editor.

- In the terminal, run npm install to install all libraries allowing you to make request to Spotify API.

- Next, create a .env file in the root directory to store your Spotify Credentials as shown below: (name must have prefix of REACT_APP_)

- REACT_APP_CLIENT_ID = XXXXXXXXXXXXXXXXX REACT_APP_CLIENT_SECRET = XXXXXXXXXXXXXXXXX

- To get these credientials, you must go to My Dashboard, log in with your Spotify account. Click on "Create an app". Pick an "App name" and "App description" of your   choice and mark the checkboxes. After creation, your "Client Id" will show and you can click on "Show client secret" to unhide your "Client secret".

- To refer to these variables anywhere in the project: process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET

## How to run the app in the browser
- In the terminal run npm start. This will run the app in development mode, on port http://localhost:3000.

- The page will reload when you make changes. You may also see any lint errors in the console.


## Project Finals GIGIH 3.0 
## Tokopedia Play Clone (Mongo+React+Node+Express)

This repository is an Tokopedia Play Clone Web App (Front End) using React + Vite. Its a video app with products placement and a comments. 


## Features

- Video library
- Products placement in Video
- User Authentication (JWT Token)
- Comments Video (Socket.io)
- Search Video by Title
- Show profile Picture and Username on Navbar

## Installation
1. Clone this Repository to your local machine
2. Navigate to the project directory and open terminal
3. install the required dependencies using : 

```bash
  npm install
```
## Environment Variables
- Create a `.env` file in the project root.
- Copy the content from `.env.example` and provide appropriate values for your environment.

## How to run in local

```bash
  npm dev / npm run dev
```
Launch your web browser and enter http://localhost:5173 in the address bar to access the application.
## Pages

- `/` : Home page displaying a list of videos with title, videoThumbnail and videoUser.
- `/login` : Login page for user to logging in to the app
- `/signup` : Signup page for user to create new account
- `/video/:id` : Video detail page to show the video detail and product placement list and a comment list in a video
- `/profile` : Profile page for user to see the loged in user acount

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

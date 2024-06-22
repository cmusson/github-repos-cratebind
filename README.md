# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required dependencies for the app.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Overview

- Create a React project that uses the GitHub REST API to show a user’s repositories with the most stars (not including forked repos)
- There is a “fork” boolean when getting a user’s repositories, so use that to filter them out
- You should be able to search a user’s name in an input field and have the pinned repositories update
- It should handle and display some sort of “loading” state while fetching data
- It should handle errors if the username doesn’t return anything on GitHub
- The list of repositories should include details such as the repository’s name, description, and the languages it uses
- Clicking on a repository should link to the GitHub page for that repository

## Requirements

1. Start by using Create React App for the base of your project, but do not use any boilerplate besides that
2. Avoid using any external NPM packages / component libraries such as Material UI, Chakra UI, etc
3. For all API requests, please only use the Fetch API
4. You are not being assessed on your “design” abilities, but try to generally display the data in a neat, organized way
5. Include a short README with a description on how to install dependencies and start the app

### Thank you for the assessment, please let me know if you have any questions or comments

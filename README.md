# Pet shelter page
This is a website for a mock pet shelter. I used the MERN stack (MongoDB, Express, React.js, Node.js), Redux for state management and TypeScript for error reduction. Functionality:
  * Registration:
    * With form validation.
    * Checks if email is taken or available. 
    * Creates a unique token.
  * Login:
    * With form validation.
    * Uses unique token to varify crudentials.
  * CRUD:
    * the homepage displays the posts that are fetched from the database.
    * if the user is logged in, you can:
      * create new posts (the form checks if the user entered valid information).
      * edit existing posts.
      * delete existing posts.
  * Passwords are NOT just stored - they're encrypted.
  * The layout of the navbar is different, depending if the person is logged in or not. 
  * Protected routing - if you are not logged in, you can't access restricted pages by entering the corresponding URL. 
  * Log out.

## System requirements
  * Node.js

## Project instructions:
  * Clone Back-end application and follow instructions in README.md file: 
    * [Back-end of the app](https://github.com/ARumiancev/PetShelter-server)
  * (Usually the env file is left blank for security purposes, but to make it easier for testers and recruiters, I left it filled out. )
  * Define variables:
    * REACT_APP_USER_KEY_IN_LOCAL_STORAGE - name of user key in local storage
    * REACT_APP_API_SERVER - api server domain

## Instalation
  * npm i

## Project scripts
  * npm start - launch development app
  * npm build - compile app

## User credentials for testing:
email: user2@gmail.com
password: Vilnius123
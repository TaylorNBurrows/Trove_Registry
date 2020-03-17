# Trove Registry

## Description 

Have you ever wanted to buy a gift for someone, but you don't know what to get them? Do you wish they had something like a wedding gift registry to give you an idea?  Enter TROVE! Register for gift ideas that you treasure and share those ideas with your friends.

This project is a Node/Express/React app which has deployed to Heroku at https://intense-wave-08247.herokuapp.com/.  The front-end React app auto-reloads as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## User Story

As a USER, I want to be able to easily find gift ideas
SO THAT I can give my friend sometthing they WANT.


## Starting the app locally

To start the app locally, front and backend dependencies must be installed by running the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

The app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Instillation

The following dependencies were utilized in this project: React, Material-UI for syling, Axios, Bcrypt for password hashing, middleware Passport for authenication, CLSX, Express, document-oriented database program MongoDB, object data modeling library Mongoose, Puppeteer for web scrapping Amazon, Etsy, Target, and Walmat.

## Credits
Courtney Tucker worked on the database models, routing, wireframing, scraping, server, APIs, authentication, overall design, https protocols for deployemnt. Taylor Burrows worked on overall design, wireframing, database, layout, component structure, routes, APIs, deploying to Heroku. Jill Circelli worked on the landing and confirmation pages, technical diagram, components, banner and other front-end design. Jen Gamez worked on components, login/sign up pages, modals and ReadMe.

## License
This project is licensed under the MIT License.

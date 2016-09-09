# angular-basic-array

A basic AngularJS app using [Express 4](http://expressjs.com/).
It demonstrates the basic of looping through an array of data using 'ng-repeat'.
It also has like and dislike buttons using 'ng-click'.

The app is ready to deploy to [Heroku](http://www.heroku.com/). The Procfile, .env and server.js files have already been created, therefore only the following is required to get it deployed to [Heroku](http://www.heroku.com/):

Further details about the steps in deploying the app can be found at the following articles:
- [Deploying-nodejs on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) 

## A. Prerequisites
It is assumed that you have the following installed:
- [Node.js](http://nodejs.org/) and npm installed.
- an existing Node.js app.
- a free Heroku account.
- the Heroku CLI and [Heroku Toolbelt](https://toolbelt.heroku.com/).


## B. Get it Locally

Fork the repo and the make a clone of the forked repo in your local machine.

## C. Check production on local

First check if you aren't relying in system-level packages.
You shouldn't get errors.
```sh
$ cd angular-basic-array
$ rm -rf node_modules; npm install --production
$ heroku local web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

If there is an error due a module not been found, it should show what dependency is missing from your package.json file.

## C. Check development on local

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Deploying-nodejs on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) 
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
# Overloop Tech Test Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing

- Make sure you have `yarn` and `node` installed (the recommended version is specified in the `engines` block of the `package.json`)
- Install the dependencies: `yarn`

## Running

 - Start the app: `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Tasks

- Add a new entity called `Author` with a first name and a last name. 
You will see that this entity is already supported by the backend.
- A user should be able to create a new `Author`, edit an existing one and list all existing ones.
- A user should be able to select an `Author` when creating or editing an `Article`.
- A user should be allowed to enter an article with no author, or remove the author from an existing article.
- When a user looks at an article, they should be able to see the author for that article.
- When a user looks at the list of all articles, they should be able to see the author for each article.
- Add unit tests for any code written to implement the tasks. The tests can use the react "testing-library" or another testing framework of your choice.

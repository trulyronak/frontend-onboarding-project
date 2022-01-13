# Frontend Onboarding Project

In this project, you'll be implementing the required frontend pages to make a merchandise store function. This will be using the completed version of the [Backend Onboarding Project](https://github.com/acmucsd/backend-onboarding-project).

If you're looking for the slides for the presentation, check that out [here](https://docs.google.com/presentation/d/1wCQctWiGnaGwL1mQcVN4RsyiP7n8OjJZuGbOiJLCSPU)

## How to Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## TODOS

### Note

This is a HUGE initial project to do. We're planning 2-3 weeks for each of you to work on this, although it's totally possible to finish this earlier. We **expect** and **want** you to ask us lots of questions! The best developers ask many questions, and understand that there's really no such thing as a *dumb* question.

Your task will be to implement all the pages as seen on [this Figma](https://www.figma.com/file/mcye5UnBFHUc0rGKmMtJ1m/Simple-Merch-Store?node-id=0%3A1).

- [ ] Home Page
  - [X] get all items - completed for you
  - [ ] be able to buy an item
  - [ ] be able to delete an item 
- [ ] Login Page
  - [ ] be able to login
- [ ] Create Item Page (only visible if you are logged in)
  - [ ] be able to create an item (the api method is completed for you)
- [ ] Your Orders Page (only visible if you are logged in)
  - [ ] be able to see all the orders you have made (with the currently logged in user)
- [ ] Navbar Component
  - [ ] the logout button shouldn't be visible if you are logged in
  - [ ] Clicking `logout` should log you out, and hide such pages from the navbar
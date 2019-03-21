# Shopify Web Development Intern Challenge 🛒🛍

Deployed at https://ivana-shopify-app.herokuapp.com/

### Task

Build a web app to search Github repositories, favourite repos, manage favourites based on the provided screenshot.

## Solution

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Structure

```
shopify-app/
  server.js
  README.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    index.css
    index.js
```

### Functionality

- Typing in the search input field does not perform an API call
- Hitting enter or clicking the "Search" button perform an API call to Github
- Performing a search render a list of exactly 10 repositories
- Each item renders:
  - The name with owner with the link to the repo's page on Github
  - The name of the primary language
  - The latest release tag (if present)
  - "Add" button (if the repo is not already favourited)
- Clicking the "Add" button add the repo to the favourites list
- When the search input field is cleared, the list of results are cleared as well
- When the number of favourites is more than one, it renders a list of favourited repositories
- Each item renders:
  - The name with owner with the link to the repo's page on Github
  - The name of the primary language
  - The latest release tag (if present)
  - The "Remove" button (if the repo has been favourited)
- Clicking the "Remove" button removes the repo from the favourites list

You can find the challenge here: https://drive.google.com/file/d/1m99bOQvewIpx0POBtGwFayZqcpiM5cXP/view

### To run the project

In the project directory, you can run:

#### 1. `npm install`

#### 2. `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

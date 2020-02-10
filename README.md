# FinalForm v1.0

## What Is It?

FinalForm is my boilerplate repo for my prefered tech stack, greatly simplifying getting a new project off the ground. The stack it includes is as follows:
### Tools
- Webpack + Babel
- ESLint + airbnb + prettier
- Typescript
### Front-End
- React
- Redux
- Sass
### Back-End
- Express

## Features
Webpack bundles both the front end code and the back end code into single JavaScript files for easier deployment. It also creates a /dist index.html, transpiles any SASS stylesheets in /src to CSS in /dist, and adds both the JavaScript bundle and stylesheet into the /dist index.html for you.

The repo contains eslint, babel, and prettier settings directly in the package.json to minimize file structure pollution. The settings included in those and the tsconfig.json file include many optional preferences.

## How to use this repo
1. Create a completely blank new repo on your github (no readme or license)
2. Navigate to your desired destination directory
3. Run the following command in the terminal from the directory, replacing the placeholder with the url of your newly created repo:
``` git clone --bare https://github.com/Gabe-Lee/final-form.git && cd final-form.git && git push --mirror [YOUR_BRAND_NEW_REPO_URL] && cd .. && rm -rf final-form.git```
4. You can now clone down your new repo from github as you normally would
5. run ```npm install``` or ```yarn install```
6. Enjoy
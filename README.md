<h1 align="center" style="color:#FFF; background: #4C3772;">
  Twitch Extension Analyzer
</h1>
<div align="center" >

<h2 style="color:#6447A4;"> CSV analyzer for twitch tv extensions.</h2>

> Twitch Extension Analyzer is a platform hosted on github pages >that assists in viewing analytical data provided by twitch tv

 <h2 style="color:#6447A4;">Insights & Analytics</h2>

> Twitch Insights provides game and extension developers with analytics data to help developers make data-driven decisions about future development. As a developer, you can use this data to enhance the experience of broadcasters and viewers and optimize how they engage with your games and extensions on Twitch
> Read More
> [Here](https://albericod.github.io/twitch-extension-analyze/)

[![Build Status](https://travis-ci.org/AlbericoD/twitch-extension-analyze.svg?branch=master)](https://travis-ci.org/AlbericoD/twitch-extension-analyze)
[![GitHub issues](https://img.shields.io/github/issues/AlbericoD/twitch-extension-analyze.svg)](https://github.com/AlbericoD/twitch-extension-analyze/issues)
[![GitHub license](https://img.shields.io/github/license/AlbericoD/twitch-extension-analyze.svg)](https://github.com/AlbericoD/twitch-extension-analyze/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/AlbericoD/twitch-extension-analyze.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FAlbericoD%2Ftwitch-extension-analyze)

</div>

# Usage

Download your CSV file in [Extension Developer Console](https://dev.twitch.tv/console/extensions).

Access the version hosted on github pages [Twitch Extension Analyze Online](https://albericod.github.io/twitch-extension-analyze/) then upload your CSV

> all data is processed in the browser, there is no remote processing, you can check all source code in this repository

# Preview

![preview gif](https://raw.githubusercontent.com/AlbericoD/twitch-extension-analyze/master/preview.gif)

---

# Contribution:

## 1. How to contribute

- Fork the project from the `master` branch and submit a Pull Request (PR)
  - Explain what the PR fixes or improves
  - Screenshots help understand change
- Use sensible commit messages
  - If your PR fixes a separate issue number, include it in the commit message

## 2. Execute basic testing

- Do a basic test with csv files in the `data` folder
  - check all calendar date ranges
  - check rendering of all graphics
  - check numbers and number formatting

## Project structure

```text
.
|--- .github/ISSUE_TEMPLATE
|--- data
|    |--- twitch-extension-test-csv-v2-3-days.csv
|    |--- twitch-extension-test-csv-v2-7-days.csv
|    |--- twitch-extension-test-csv-v2-15-days.csv
|    |--- twitch-extension-test-csv-v2-29-days.csv
|    |--- twitch-extension-test-csv-v2-30-days.csv
|    |--- twitch-extension-test-csv-v2-60-days.csv
|    |--- twitch-extension-test-csv-v2-90-days.csv
|    |--- twitch-extension-test-csv-v2-186-days.csv
|--- public
|    |--- favicon.ico
|    |--- index.html
|    |--- manifest.json
|--- src
|    |--- components/*/**.tsx
|    |--- containers/*/**.tsx
|    |--- layout/*/**.tsx
|    |--- store/*/**.ts
|    |--- utils/*/**.ts
|    |--- App.test.tsx
|    |--- App.tsx
|    |--- app.less
|    |--- index.tsx
|    |--- react-app-env.d.ts
|    |--- serviceWorker.ts
|--- .gitignore
|--- .travis.yml
|--- CODE_OF_CONDUCT.md
|--- LICENSE
|--- README.md
|--- SECURITY.md
|--- config-overrides.js
|--- package-lock.json
|--- package.json
|--- prev-b.png
|--- preview.gif
|--- tsconfig.json
|--- yarn.lock
```

## Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)

## Available Scripts

In the project directory, you can run:

| Action                             | Usage               |
| ---------------------------------- | ------------------- |
| Starting development mode          | `npm start`         |
| Builds for production              | `npm run build`     |
| Running unit tests                 | `npm test`          |
| Remove react scripts               | `npm run eject`     |
| Run automatically before deploying | `npm run predeploy` |
| Send code to gh pages              | `npm run deploy`    |

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

[Albérico Dias Barreto Filho](https://twitter.com/bekoslove)

## License

[MIT](https://github.com/AlbericoD/twitch-extension-analyze/blob/master/LICENSE)

# This is a news search app created in vue.js
A user can search news by voice commands from different new sources and listing of the news cards will be displayed to the user.

## Project setup
Create an .env.development file with the following properties 
* VUE_APP_NEWS_APP_API_KEY="News api key"

[News api's](https://newsapi.org/) has been used to fetch the latest news

Packages used in the project are as follows 

- **WebkitSpeechRecognition** to recognise user commands
- **Annyang** to register voice commands
- **Axios** to consue api
- **Bulma and bootstrap** css library
- **SpeechSynthesis** to output voice commands

## Folder structure

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

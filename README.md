# Overview

This application takes in data from Aylien's Text API in order to display sentiment analysis of URLs and text snippets.  When a user enters a valid URL or sentence, the analysis will occur, and the 'Results' section will populate with information for:

  - subjectivity
  - subjectivity certainty
  - polarity
  - polarity certainty
  - analyzed text

If the user enters an invalid URL, an alert will display. Similarly, if a user enters a URL into the Text Validator, an alert will display. 

## Future work

If another developer is to work on this code in the future, they can run:

### Run in dev mode:

  - `npm install`, `npm run build-dev` and `npm start` to begin

### Run in prod mode:
  - `npm install`, `npm run build-prod` and `npm start` to begin

## Additional Files

The .env file contains the API ID and KEY from Aylien.  They are referenced in server > index.js as such:

```javascript
  var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
  });
```

## Testing

Testing is set up with Jest, run `npm test` to run the current tests

## Deployment
Site is deployed on Netlify at https://automaticsentimentevaluation.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/d7271aa4-e6f7-4619-b2a4-206b32887257/deploy-status)](https://app.netlify.com/sites/automaticsentimentevaluation/deploys)
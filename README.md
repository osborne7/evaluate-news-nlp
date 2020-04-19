# Overview

This application takes in data from Aylien's Text API in order to display sentiment analysis of URLs and text snippets.  When a user enters a valid URL or sentence, the analysis will occur, and the 'Results' section will populate with information for:

  - subjectivity
  - subjectivity certainty
  - polarity
  - polarity certainty

If the user enters an invalid URL, an alert will display. Similarly, if a user enters a URL into the Text Validator, an alert will display. 

## Future work

If another developer is to work on this code in the future, they can run:
  - `npm install` and `npm run build-dev` or `npm run build-prod` to begin

## Testing
Testing is set up with Jest, run `npm test` to run the current tests


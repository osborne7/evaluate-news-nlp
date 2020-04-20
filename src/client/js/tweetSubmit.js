function tweetSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userTweet = document.getElementById('tweet').value;

    const subjResult = document.getElementById('subjectivity');
    const subjConfidence = document.getElementById('subj-certainty');
    const polarityResult = document.getElementById('tone');
    const polarityConfidence = document.getElementById('tone-certainty');
    const textSnippet = document.getElementById('text-snippet');


    subjResult.innerHTML = '';
    subjConfidence.innerHTML = '';
    polarityResult.innerHTML = '';
    polarityConfidence.innerHTML = '';
    textSnippet.innerHTML = '';

    if (Client.checkURL(userTweet)) {
        alert('Please use the URL validator above for URLs, try a sentence in this evaluator!');
    } else {
        // console.log('user tweet: ' + userTweet);
        fetch('http://localhost:8080/tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: userTweet })
        })
        .then(res => res.json())
        .then(function(res) {
            // console.log(res);
            subjResult.innerHTML = res.subjectivity;
            subjConfidence.innerHTML = res.subjectivity_confidence;
            polarityResult.innerHTML = res.polarity;
            polarityConfidence.innerHTML = res.polarity_confidence;
            textSnippet.innerHTML = res.text;

            //scroll to results
            let scrollTo = document.getElementById('results');
            scrollTo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            })
    }
    }

export { tweetSubmit }

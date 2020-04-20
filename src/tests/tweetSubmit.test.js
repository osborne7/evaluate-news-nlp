import { tweetSubmit } from '../client/js/tweetSubmit'

test('is tweetSubmit a recognized function?', () => {
    expect(typeof tweetSubmit).toBe('function')
})
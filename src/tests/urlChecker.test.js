
import { checkURL } from '../client/js/urlChecker'


test('test URL checker functionality', () => {
    expect(checkURL('https://www.cnn.com/asia/live-news/coronavirus-pandemic-intl-04-15-20/index.html')).toBe(true);
    expect(checkURL('w.google.com')).toBe(false);

});
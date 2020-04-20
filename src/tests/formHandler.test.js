import { handleSubmit } from '../client/js/formHandler'

test('handleSubmit exists', () => {
    expect(handleSubmit).toBeDefined();
});

test('handleSubmit is recognized as a function', () => {
    expect(typeof handleSubmit).toBe('function');
});
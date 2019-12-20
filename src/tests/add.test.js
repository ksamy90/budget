const add = (a, b, c) => {
    return a + b + c;
};

const generateGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
}

test('should add two numbers', () => {
    const result = add(5, 2, 3);
    expect(result).toBe(10);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Daisy');
    expect(result).toBe('Hello Daisy!');
});

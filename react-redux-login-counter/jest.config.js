// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Path to setupTests.js
    testEnvironment: 'jsdom', // Specify the test environment
    moduleNameMapper: {
        // Handle module aliases (useful if you're using Webpack aliasing)
        '^components/(.*)$': '<rootDir>/src/components/$1',
    },
    testPathIgnorePatterns: ['/node_modules/', '/public/'], // Directories to ignore
    transform: {
        // Transform files with babel-jest
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },

 
    testMatch: ["**/src/tests/**/*.js"],
    // Additional configuration options as needed
};

// jest.setup.js or src/setupTests.js
import '@testing-library/jest-dom'
// Polyfill for global objects or APIs
global.TextDecoder = global.TextDecoder || require('util').TextDecoder;

// Global mocks
jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(() => ({
        // Mock other Auth methods as needed
    })),
    onAuthStateChanged: jest.fn(() => jest.fn()), // Mock implementation
    // Add mock implementations for other Firebase Auth methods you use
}));
 

// Any other global setup...

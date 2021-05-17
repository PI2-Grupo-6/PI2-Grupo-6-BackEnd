module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    globalSetup: '<rootDir>/__tests__/setup.js',
    globalTeardown: '<rootDir>/__tests__/teardown.js',
    setupFilesAfterEnv: ['<rootDir>/__tests__/setupAfterEnv.js'],
    testEnvironment: '<rootDir>/__tests__/environment.js',
    testMatch: ['**/__tests__/**/*.test.js'],
    // transform: {
    //     "^.+\\.(js|ts|tsx)$": "ts-jest"
    // },
    // collectCoverage: true,
    // testResultsProcessor: 'jest-sonar-reporter',
    coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
};

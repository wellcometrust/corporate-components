module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/mocks/file.mock.js',
    '\\.(css|scss)$': '<rootDir>/src/test/mocks/style.mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/?(*.)(test).(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest'
  },
  verbose: true
};

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|ts)x?'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/mocks/file.mock.js',
    '\\.(css|scss)$': '<rootDir>/src/test/mocks/style.mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|ts)x?',
    '<rootDir>/src/**/?(*.)(test).(js|ts)x?'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.((js|ts)x?)?$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest'
  },
  verbose: true
};

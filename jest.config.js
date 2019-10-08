module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/file.mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(test).{js,jsx,mjs}'
  ],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest'
  },
  verbose: true
};

module.exports = {
  rootDir: '../',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.ts*',
    '!src/**/__snapshots__/*.*',
    '!src/**/index.ts',
    '!src/**/config/*.ts',
    '!src/**/*.interface.ts',
    '!src/**/index.tsx',
    '!src/**/constants/*.*',
    '!src/**/*.style.*',
    '!src/**/*.labels.*',
    '!src/**/*.constants.*',
    '!src/**/service/**',
    '!src/**/styles/**',
    '!src/**/stories/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'],
  testURL: 'https://google.com',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '\\.png': '<rootDir>/__mocks__/pngMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};

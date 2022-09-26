const esModules = ["react-native", "@react-native", "@react-navigation"].join(
  "|"
);
const expoPreset = require("jest-expo/jest-preset");

module.exports = {
  ...expoPreset,
  clearMocks: true,
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jest.setup.js",
  ],
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: [
    "/lib/",
    "/coverage/",
    "/node_modules/",
    "/example/",
  ],
  moduleDirectories: ["node_modules", "lib"],
  coverageReporters: ["html", "json", "text-summary"],
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/svgMock.ts",
  },
  preset: "jest-expo",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "d.ts"],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  verbose: true,
};

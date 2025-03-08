module.exports = {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy", 
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    },
    testEnvironment: "jsdom", 
    transformIgnorePatterns: [
        "node_modules/(?!(axios|react-router-dom)/)", 
      ],
      transform: {
        "^.+\\.jsx?$": "babel-jest", 
      },
};

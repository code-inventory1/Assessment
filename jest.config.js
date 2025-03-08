module.exports = {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    },
    testEnvironment: "jsdom", // Important for DOM testing
    transformIgnorePatterns: [
        "node_modules/(?!(axios|react-router-dom)/)", // ✅ Ensure Jest transpiles axios
      ],
      transform: {
        "^.+\\.jsx?$": "babel-jest", // ✅ Ensure Jest uses Babel to transform JS files
      },
};

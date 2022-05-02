export default {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/tests/**/*.spec.ts", "**/tests/**/*.test.ts"],
  testEnvironment: "node",
};

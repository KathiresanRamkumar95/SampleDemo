module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "lib/**/*.js",
        mutated: true,
        included: false
      },
      "_tests_/**/*.js"
    ],
    testRunner: "jest",
    mutator: "es5",
    transpilers: [],
    reporter: ["html", "progress"],
    coverageAnalysis: "off"
  });
};
#!/usr/bin/env node

// Setup Jasmine
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

// Setup console reporter
const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

// Initialize and execute
jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();
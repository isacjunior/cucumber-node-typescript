const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'src/report/cucumber_report.json',
  output: 'src/report/cucumber_report.html',
  screenshotsDirectory: 'screenshots/',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0'
  }
}

reporter.generate(options, () => process.exit())
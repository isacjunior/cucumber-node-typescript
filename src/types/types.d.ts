declare module 'cucumber-html-reporter' {
  interface Options {
    theme: string,
    jsonFile: string,
    jsonDir?: string,
    output: string,
    screenshotsDirectory?: string,
    reportSuiteAsScenarios: boolean,
    ignoreBadJsonFile?: boolean,
    launchReport: boolean,
    columnLayout?: number,
    storeScreenshots?: boolean,
    noInlineScreenshots?: boolean,
    name?: string,
    metadata?: {
      [key: string]: string,
    },
  }

  export function generate(options: Options, callback: () => NodeJS.Process): void
}

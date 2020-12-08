// Run from command line via

const webdriver = require('selenium-webdriver');
const GoogleSearchPage = require('../../lib/pages/google-search')

// The pref exposes console errors to the tests
const pref = new webdriver.logging.Preferences();
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setLoggingPrefs(pref)
  .build();

describe('Google Search', () => {
  process.on('unhandledRejection', (error) => {
    throw (error); // promote promise warning to mocha error
  });

  before(async () => {
    this.googleSearchPage = new GoogleSearchPage(webdriver, driver, "http://www.google.com",20000);
  });

  it('Search for Mirelly VL', async () => {
    await this.googleSearchPage.navigate()
    await this.googleSearchPage.enterSearchText('Mirelly VidaLoka')
    await this.googleSearchPage.clickSearchButton()
  });

  it('Search for Rodrigo', async () => {
    await this.googleSearchPage.navigate()
    await this.googleSearchPage.enterSearchText('Rodrigo')
    await this.googleSearchPage.clickSearchButton()
  });

  after(async () => driver.quit());
});
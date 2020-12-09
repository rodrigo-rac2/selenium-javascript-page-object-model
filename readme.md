Selenium Webdriver Page Object Model
By Rodrigo Costa, forked from Robert Bourbonnais

1.  Demonstrates a way of organizing Selenium Javascript Tests 
Using the Page Object Model popularized by Selenium Java Tests

2.  The primary advantage to using Page Objects is that when a component changes in the underlying application, it only needs to be changed in the Page object instead of each test.

3. Important - when in Chrome inspect to inspect an element on the screen - then control-f to open search window,
lets you search by name, selector or xpath.

4.  Clone/Fork this repo

5. There are a variety of drivers for different browsers and environments including:
HTMLUnitDriver
FireFoxDriver
ChromeDriver
OperaDriver 
IEDriver
RemoteDriver for Saucelabs and Grid
Various Mobile Drivers

6.  In order to run the tests, you will need to download at least the ChromeDriver and put it into your path (that's selenium!).
I have included a webdrivers folder in this repo, that you can simply copy into your Applications folder and then edit your .bash_profile to add
export PATH="/Applications/webdrivers:$PATH"
to get going. (Note: there are also some files for setting running a Selenium Grid that isn't covered by this readme)

7.  $ npm install

8.  $ npm run test




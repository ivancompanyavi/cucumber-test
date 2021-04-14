const { Given, When, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const assert = require('assert')

const { baseUrl } = require('../../config')

Given('we load the main page', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.driver.get(`${baseUrl}/`)
});

When('we click on {string} button', async function (buttonClassname) {
  await this.driver.findElement(By.css(`button.e2e_${buttonClassname}`)).click()
});

Then('text {string} should be {string}', async function (textClassname, expected) {
  const actual = await this.driver.findElement(By.css(`.e2e_${textClassname}`)).getText()
  assert.strictEqual(actual, expected)
});
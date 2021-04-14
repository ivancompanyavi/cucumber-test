const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber')
const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

const { timeout, browser } = require('../../config')


class World {
  constructor () {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
    this.driver = new Builder()
    .forBrowser(browser)
    .build()

  }
}

setWorldConstructor(World)
setDefaultTimeout(timeout)


import Rollbar from "rollbar"
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Pressing draw button loads robots to select`, async () => {
    await driver.findElement(By.xpath(`//button[text()="Draw"]`)).click()
    const robList = await driver.findElement(By.xpath(`//div`))
    expect(robList.isDisplayed()).toBeTruthy()
    await driver.sleep(3000)
})

test(`Pressing Add to Duo button moves the robot to your duo`, async () => {
    await driver.findElement(By.xpath(`//h3[text()="Beta"]`))
    await driver.findElement(By.xpath(`//button[text()="Add to Duo"]`)).click()
    const duoList = await driver.findElement(By.xpath(`//div[text()="Your Duo]`))
    expect(duoList.isDisplayed()).toBeTruthy()
    await driver.sleep(3000)
})

import { By, until } from 'selenium-webdriver';

export default class LandingPage {
    constructor(driver) {
        this.driver = driver;
    }

    login = By.xpath("//a[text()='Login']")
    posts = By.xpath("//a[text()='Posts']")
    welcomeBanner = By.id("hp-hdr")
    
    async clickPosts() {
        await this.driver.wait(until.elementLocated(this.posts, 10000));
        await this.driver.findElement(this.posts).click();
    }

    async clickLogin() {
        await this.driver.wait(until.elementLocated(this.login, 10000));
        await this.driver.findElement(this.login).click();
    }

    async getWelcomeBanner() {
        await this.driver.wait(until.elementLocated(this.welcomeBanner, 10000));
        let banner = await this.driver.findElement(this.welcomeBanner).getText();
        return banner;
    }
};
import { By, until } from 'selenium-webdriver';

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    emailField = By.id("email")
    passwordField = By.id("psw")
    loginButton = By.xpath("//button[text()='Login']")

    async loginUser(email, password) {
        await this.driver.wait(until.elementLocated(this.emailField, 10000));
        await this.driver.findElement(this.emailField).sendKeys(email);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }
};
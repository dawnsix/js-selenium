import 'chromedriver';
import { Builder, By, Capabilities } from 'selenium-webdriver';
import { assert } from 'chai';

import LandingPage from '../pages/landingPage.js';
import LoginPage from '../pages/loginPage.js';
import { data } from '../data/environment.js';

let driver;
let landingPage;
let loginPage;

beforeEach(async function() {
    console.log(data.target)
    
    driver = await new Builder()
        .forBrowser('firefox')
        .build();

    landingPage = new LandingPage(driver);
    loginPage = new LoginPage(driver);

    driver.get(data.target);
});

describe('basic user flows', function() {
    it('navigate to posts', async function() {
        let landingText = await driver.findElement(By.id('hp-hdr')).getText()
        assert.equal(landingText, 'Welcome to PaidRaid');

        await landingPage.clickPosts();
    });
});

describe('user management flows', function() {
    it('user login flow', async function() {
        await landingPage.clickLogin();
        await loginPage.loginUser(data.email, data.password);
        
        let banner = await landingPage.getWelcomeBanner();
        assert.include(banner, data.username);
    });
});

afterEach(() => driver && driver.quit());
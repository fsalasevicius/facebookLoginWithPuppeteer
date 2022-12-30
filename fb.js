const puppeteer = require('puppeteer')
const data = require('./data')

let loginFb = async() => {
  
    const browser = await puppeteer.launch({
        headless: false
      })
      const page = await browser.newPage()
      await page.goto('https://www.facebook.com/login.php')

      const selector = '#email'
      const passSelector = '#pass'
      const btnSelector = '#loginbutton'
    
      await page.click(selector)

      await page.keyboard.type(data.username)

      await page.click(passSelector)
      
      await page.keyboard.type(data.password)

      await page.click(btnSelector)

      await page.waitForNavigation()
}

loginFb()

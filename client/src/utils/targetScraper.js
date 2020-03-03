const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const targetScraper = (async (url) =>{
    const url = 'https://www.target.com/p/semi-precious-white-howlite-38-sunstone-stretch-bracelet-set-universal-thread-8482-worn-gold/-/A-78261160';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    let html = await page.content();
    const $ = cheerio.load(html);
    console.log($.html())
    let title = $('h1[data-test=product-title] > span').text();
    let price = $('div[data-test=product-price]').text();
    let description = $('.h-margin-v-default').text()
    let imgSource = $('.slideDeckPicture').find('img').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
    browser.close();
})

export default targetScraper;
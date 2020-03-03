const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const etsyScraper = (async (url) => {
    const url = 'https://www.amazon.com/Echo-Dot/dp/B07FZ8S74R/ref=zg_bs_electronics_home_3?_encoding=UTF8&psc=1&refRID=ZBJ62K7CYMVZF0HSXZMR';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let html = await page.content();
    const $ = cheerio.load(html);
    console.log($.html())
    let title = $('#productTitle').text().trim();
    let price = $('#priceblock_ourprice').text();
    let description = $('#feature-bullets > ul > li > span.a-list-item').first().text().trim()
    let imgSource = $('[data-a-image-name=landingImage]').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
    browser.close()
})

export default etsyScraper;
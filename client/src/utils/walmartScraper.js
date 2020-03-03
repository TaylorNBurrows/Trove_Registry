const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const walmartScraper = (async (url) => {
    const url = 'https://www.walmart.com/ip/Blush-Minerals-I-Print-Wall-Art-By-Jarman-Fagalde/598034155';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let html = await page.content();
    const $ = cheerio.load(html);
    console.log($.html())
    let title = $('h1.prod-ProductTitle').text();
    let price = $('span.price-group').first().text();
    let description = $('.about-desc').text()
    let imgSource = 'https:' + $('.hover-zoom-hero-image').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
    browser.close()
})

export default walmartScraper;
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


function walmartScraper(url) {
    return(async () => {
    let item = {};
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
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
    item ={
        'title': title,
        'price': price,
        'description': description,
        'imgSrc': imgSource
    }
    return item;
})
};

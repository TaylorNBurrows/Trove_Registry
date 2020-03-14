const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


function etsyScraper(url){
    return (async () => {
    let item = {};
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url);

    let html = await page.content();
    const $ = cheerio.load(html);
    console.log($.html())
    var title = $('.wt-text-body-03').first().text()
    var price = $('.wt-text-title-03').text()
    var description = $('.wt-content-toggle__body > p').text()
    var imgSource = $('.carousel-pane-list > .carousel-pane > .carousel-image').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
    browser.close()
    item = {
        'title': title,
        'price': price,
        'description': description,
        'imgSrc': imgSource
    }
    return item
})
}
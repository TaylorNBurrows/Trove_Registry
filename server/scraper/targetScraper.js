const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


function targetScraper(url) {
    return (async () => {
        let item = {}
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
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
        item = {
            'title': title,
            'price': price,
            'description': description,
            'imgSrc': imgSource
        }
        return item;
    })
};

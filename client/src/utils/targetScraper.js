const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const targetScraper = (url) =>{
    const url = 'https://www.target.com/p/semi-precious-white-howlite-38-sunstone-stretch-bracelet-set-universal-thread-8482-worn-gold/-/A-78261160';

  return puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(html => {
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
  })
  .catch(console.error)
}

export default targetScraper;
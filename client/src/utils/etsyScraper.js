const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://www.etsy.com/listing/153535737/handmade-black-fingerless-steampunk?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sr_gallery-1-3&frs=1';
const etsyScraper = (url) =>{
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
    var title = $('.wt-text-body-03').first().text()
    var price = $('.wt-text-title-03').text()
    var description = $('.wt-content-toggle__body > p').text()
    var imgSource = $('.carousel-pane-list > .carousel-pane > .carousel-image').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
  })
  .catch(console.error)
}

export default etsyScraper;
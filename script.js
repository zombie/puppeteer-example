const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');

(async() => {

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://example.com/');
  console.log(await page.title());

  
  browser.close();
  // assert(fs.existsSync('actual_images/example.png'));
  console.log(' 🎉 ');
})();

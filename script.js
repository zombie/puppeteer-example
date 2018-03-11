
const {resolve} = require("path");
const extension = resolve(__dirname, ".");


const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');

(async() => {

  const browser = await puppeteer.launch({
    args: [
      `--disable-extensions-except=${extension}`,
      `--load-extension=${extension}`,
      '--disable-setuid-sandbox',
      '--no-sandbox',
    ],
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://github.com/zombie/blind-reviews/pull/1');
  const title = await page.title();
  const x = await page.$("#br-toggle");
  const bb = x && await x.boundingBox();
  
  console.log(bb);
  browser.close();

  console.log(' 🎉 ');
})();

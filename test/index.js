const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');

describe('PicTheme', async function(){
  let browser;
  let page;

  const opts = {
    args: [ '--start-fullscreen' ]
  };

  this.timeout(10000);
  before(async function(){
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.setViewport({ width: 1787, height: 800 });
    await page.goto('http://pictheme.herokuapp.com/', {
      waitUntil: 'load'
    });
    const imgPath = path.relative(process.cwd(), __dirname + '/scenery.jpg');
    const input = await page.$('input[type="file"]');
    await input.uploadFile(imgPath);
    // Only visible when the ThemeCustomizer is loaded
    await page.waitForSelector('.input-title');
  });

  after(async function(){
    await browser.close();
  });

  it('Renders the original name of the uploaded image 1:1 ', async function(){
    const originalImgName = 'scenery.jpg';
    const imgNameOnSite = await page.evaluate(() => {
      return document.querySelector('.input-title').innerText;
    });
    expect(imgNameOnSite.slice(7)).to.equal(originalImgName);
  });

  it('Successfully uploads the user-uploaded image to Imgur', async function(){
    // The selector changes from .text-waiting to this once the image is done uploading to Imgur
    const doneUploading = await page.waitForSelector('.output-area > span:nth-child(4)');
    expect(!!doneUploading).to.be.true;
  });

  it('Fully and accurately renders palette 1', async function(){
    const staticPaletteOneColors = [
      'rgb(214, 156, 71)',
      'rgb(165, 129, 111)',
      'rgb(174, 199, 216)',
      'rgb(55, 115, 76)',
      'rgb(117, 141, 4)',
      'rgb(138, 186, 220)'
    ];
    const livePaletteOneColors = await page.evaluate(async () => {
      const arr = [];
      const squares = await document.getElementsByClassName('color-square');
      for (let square of squares) {
        arr.push(square.style.backgroundColor);
      }
      return arr;
    });
    expect(livePaletteOneColors).to.deep.equal(staticPaletteOneColors);
  });

  it('Fully and accurately renders palette 2', async function(){
    await page.click('.switch');
    const staticPaletteTwoColors = [
      'rgb(134, 129, 46)',
      'rgb(41, 93, 34)',
      'rgb(150, 170, 195)',
      'rgb(219, 154, 86)',
      'rgb(139, 46, 55)',
      'rgb(159, 136, 123)',
      'rgb(166, 202, 78)'
    ];
    const livePaletteTwoColors = await page.evaluate(async () => {
      const arr = [];
      const squares = await document.getElementsByClassName('color-square');
      for (let square of squares) {
        arr.push(square.style.backgroundColor);
      }
      return arr;
    });
    expect(livePaletteTwoColors).to.deep.equal(staticPaletteTwoColors);
  });
});

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
  await page.type('#name', 'David');
  await page.type('#email', 'davidy22118@gmail.com');
  await page.type('#phone','0503247101');
  await page.type('#company','jones');
  await page.select('select#employees', '51-500'); 
  await page.screenshot({path: 'example.png'});
  await page.click('.button')
  console.log("You have reached the thank you page")
  
  
  await browser.close();
})();
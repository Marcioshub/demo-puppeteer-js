const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      "--start-maximized", // you can also use '--start-fullscreen'
    ],
  });

  const page = await browser.newPage();

  const url = "https://nysifdev1.service-now.com/nsp?id=sc_home";

  await page.goto(url);

  //   const grabParagraph = await page.evaluate(() => {
  //     const content = document.querySelectorAll(".content p");
  //     console.log(content);
  //     return content;
  //   });
  //   console.log(grabParagraph);

  await page.type("input[id=userNameInput]", process.env.USERNAME, {
    delay: 10,
  });

  await page.type("input[id=passwordInput]", process.env.PASSWORD, {
    delay: 10,
  });

  await page.click("button[id=submitButton]", { delay: 20 });

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 10000);
    });
  });

  await browser.close();
})();

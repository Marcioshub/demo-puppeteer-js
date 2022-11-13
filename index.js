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
  await page.goto(process.env.URL);

  await page.type("input[id=firstName]", process.env.FIRST_NAME, { delay: 10 });
  await page.type("input[id=lastName]", process.env.LAST_NAME, { delay: 10 });
  await page.type("input[id=address1]", process.env.ADDRESS_1, { delay: 10 });
  await page.type("input[id=city]", process.env.CITY, { delay: 10 });
  await page.type("input[id=zip]", process.env.ZIP, { delay: 10 });
  await page.type("input[id=state]", process.env.STATE, { delay: 10 });
  await page.type("input[id=country]", process.env.COUNTRY, { delay: 10 });

  // check the next button
  await page.click("input[name='saveAddress']", { delay: 20 });

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 5000);
    });
  });

  // click the next button
  await page.click(
    "button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-8bjq0v-MuiButtonBase-root-MuiButton-root"
  );

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
  });

  await page.type("input[id=cardName]", process.env.CARD_NAME, { delay: 10 });
  await page.type("input[id=cardNumber]", process.env.CARD_NUMBER, {
    delay: 10,
  });
  await page.type("input[id=expDate]", process.env.EXP_DATE, { delay: 10 });
  await page.type("input[id=cvv]", process.env.CVV, { delay: 10 });
  await page.click("input.PrivateSwitchBase-input.css-1m9pwf3");

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
  });

  await page.click(
    "button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-8bjq0v-MuiButtonBase-root-MuiButton-root"
  );

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
  });

  await page.click(
    "button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-8bjq0v-MuiButtonBase-root-MuiButton-root"
  );

  // const submitButton = await page.evaluate(() => {
  //   const btn = document.querySelector(
  //     ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-8bjq0v-MuiButtonBase-root-MuiButton-root"
  //   );

  //   return btn.innerText;
  // });

  // console.log(submitButton);

  // await page.click(
  //   "button[.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-8bjq0v-MuiButtonBase-root-MuiButton-root]"
  // );

  // const grabSideList = await page.evaluate(() => {
  //   const list = document.querySelector(".vertical-menu.scrollspy li a");
  //   const sideList = [];

  //   list.forEach((tag) => {
  //     sideList.push(tag.innerText);
  //   });

  //   return sideList;

  // });

  // console.log(grabSideList);

  // await page.type("input[id=InputName]", "Spencer", { delay: 10 });
  // await page.type("input[id=InputEmail]", "Spencer@gmail.com", { delay: 10 });
  // await page.type("input[id=InputSubject]", "test subject 1 2 3 4 5", {
  //   delay: 10,
  // });

  // await page.type("textarea[id=InputMessage]", process.env.EMAIL, {
  //   delay: 30,
  // });

  // wait 5 seconds
  await page.evaluate(async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 5000);
    });
  });

  await browser.close();
})();

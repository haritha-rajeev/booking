const {Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const path = require('path');

const Orange_login =require('../pageobjects/orange_login.page');
const Orange_dasboard=require('../pageobjects/orange_dashboard.page');
const Orange_admin_um=require('../pageobjects/orange_admin_um.page');
const Orange_pim=require('../pageobjects/orange_pim.page');
const Orange_pim_page=require('../pageobjects/Orange_add_pim.page');
const orange_fill_detailsPage = require('../pageobjects/orange_fill_details.page');
const Orange_add_admin=require('../pageobjects/orange_add_admin.page');


const BookMyShow_main=require('../pageobjects/BookMyShowMain.page');


const Saucedemo_loginpage= require('../pageobjects/saucedemo_loginpage.page');
const Saucedemo_mainPage = require('../pageobjects/saucedemo_main.page');
const Saucedemo_viewCartPage = require('../pageobjects/saucedemo_viewCart.page');
const Saucedemo_checkOut= require('../pageobjects/saucedemo_checkOut.page');
const Saucedemo_overview=require('../pageobjects/saucedemo_overview.page');
const Saucedemo_thankyou=require('../pageobjects/Saucedemo_thankyou.page');
const Saucedemo_thankyouPage = require('../pageobjects/Saucedemo_thankyou.page');
const orange_admin_umPage = require('../pageobjects/orange_admin_um.page');

Given(/^I am on the login page of OrangeHRM$/, async() => {
    await Orange_login.open();
    
});

When(/^I login with credentials$/, async() => {
	await Orange_login.login();
  await browser.pause(10000);
});

Then(/^I should see the home page$/, async() => {
	await Orange_dasboard.assert();
  await browser.pause(10000);
});

When(/^click on admin$/, async() => {
    await Orange_dasboard.click_on_admin();
    await browser.pause(10000);
    
});

Then(/^search for an admin$/, async() => {
  await Orange_admin_um.assert_main();
	await Orange_admin_um.search_for_admin();
  await Orange_admin_um.assert();
  await browser.pause(10000);
});

When(/^click on pim$/, async() => {
	await Orange_admin_um.click_on_pim();
  await browser.pause(10000);
  await Orange_pim.assert();
  await Orange_pim.add_click();
  await browser.pause(10000);
});


Then(/^add add new employee$/, async() => {
  await Orange_pim_page.assert();
	await Orange_pim_page.add_initial();
});


When(/^fill in employee details$/, async() => {
  await orange_fill_detailsPage.assert();
	await orange_fill_detailsPage.fill();
});


Then(/^add the new employee as admin$/, async() => {
	await orange_fill_detailsPage.click_on_admin();
  await orange_admin_umPage.click_on_add();

  await Orange_add_admin.assert();
  await Orange_add_admin.employee_to_admin();

  await browser.pause(10000);
});


When(/^reach admin page$/, async() => {
  await Orange_admin_um.assert_main();
});

Then(/^search for the new admin$/, async() => {
await Orange_admin_um.search_for_admin2();
await Orange_admin_um.assert_new_admin();
await browser.pause(10000);	
});







Given(/^I am BookMyShow$/, async() => {
	BookMyShow_main.open();
});


When(/^select Kochi as location$/, async() => {
	BookMyShow_main.select_Kochi();
  await browser.pause(10000);
});







Given(/^Booking site$/, async() => {
  await browser.maximizeWindow();
  await browser.url('https://www.agoda.com/en-in/');
});

When(/^select everything$/, async() => {

  // let frame = await browser.$("//div[@class='ab-in-app-message  ab-background ab-modal-interactions ab-modal ab-centered']");
  // await frame.waitForExist({ timeout: 20000 });
  // if(frame.isExisting()){  
  // await browser.switchToFrame(frame);
  // await $("//button[@aria-label='Close Message']").click();
  
  // }
	await $("//div[@id='autocomplete-box']").click();
  await $("//button[@id='destination_suggestion_card' and @data-element-value='Goa']").click();
  await $("//span[@data-selenium-date='2023-10-24']").click();
  await $("//span[@data-selenium-date='2023-11-27']").click();
  await $("//p[starts-with(text(),'Children')]/following::button[2]").click();
  

//     await browser.switchToFrame(frame);
   const search =await $("//button[@data-selenium='searchButton']");
//   await search.waitForExist({ timeout: 20000 });
  search.click();
//  // console.log(await $("//button[@data-selenium='searchButton']").isExisting());
//   await browser.pause(20000);

});


Then(/^select a place$/, async() => {
   let w = await browser.getWindowHandles();
   await browser.switchToWindow(w[1]);
   await expect(browser).toHaveUrlContaining('agoda');

   await $("//span[starts-with(text(),'SEARCH')]/parent::button").click();
//assert
//await expect(browser).toHaveUrl('');
//await expect($("//input[@value='Goa']")).toHaveText('Goa');
// await expect($("//input[@value='Goa']/parent::div")).toHaveText('Goa');
await expect($("//div[@aria-label='Search filters form. Type a destination or hotel name. Current destination is Goa']")).toHaveText('Goa');
await expect($("//div[@class='SearchBoxTextDescription__title' and starts-with(text(),'24 Oct 2023')]")).toHaveText('24 Oct 2023');

await expect($("//div[@class='SearchBoxTextDescription__title' and starts-with(text(),'27 Nov 2023')]")).toHaveText('27 Nov 2023');
await expect($("//div[@class='SearchBoxTextDescription__title']//span[@data-selenium='adultValue']")).toHaveText('2 adults');
await expect($("//div[@class='SearchBoxTextDescription__title']//span[@data-selenium='childValue']")).toHaveText('1 child');




  await $("//span[starts-with(text(),'Property type')]/following::li[6]/span/span[1]/span").click();
  await expect($('//*[@id="SideBarLocationFilters"]/div[1]/div[3]/div[2]/ul/li/span/span[2]/span/span')).toHaveText('Motel');
   await browser.pause(5000);
  //await expect($("//h3[@data-selenium='hotel-name' and starts-with(text(),'FabEscape')]")).toHaveText('FabEscape Ocean Wellness Resort With Pool');
 //await $("//div[@class='Box-sc-kv6pi1-0 hRUYUu JacketContent JacketContent--Empty']/a[@aria-label='FabEscape Ocean Wellness Resort With Pool']").click();
 //await $("//div[@class='Box-sc-kv6pi1-0 edeiva JacketContent JacketContent--PulseProperty']/a").click();
  await browser.pause(5000);
  //let w1 = await browser.getWindowHandles();
   //await browser.switchToWindow(w1[2]);
  // await expect($("//p[starts-with(text(),'FabEscape Ocean') and @class='HeaderCerebrum__Name']")).toHaveText('FabEscape Ocean Wellness Resort With Pool');
   //await $("//div[starts-with(text(),'Book now')]/parent::button").click();
   await browser.pause(5000);
});














Given(/^I am on saucedemo$/, async() => {
 await  Saucedemo_loginpage.open();
});

When(/^enter wrong credentials$/, async() => {
	await Saucedemo_loginpage.wrong_cred();
});

Then(/^I should not login$/, async() => {
   await Saucedemo_loginpage.wrong_assert();
});



When(/^enter correct credentials$/, async() => {
	  await  Saucedemo_loginpage.correct_cred();
});

Then(/^I should  login$/, async() => {
  await Saucedemo_mainPage.pageAssert();
});


When(/^add products to cart$/, async() => {
	await Saucedemo_mainPage.add();
  await Saucedemo_mainPage.addToCart();
});

Then(/^view cart$/, async() => {
  await Saucedemo_viewCartPage.assert();
	await Saucedemo_viewCartPage.click_checkOut();
});

When(/^add user details$/, async() => {
	console.log('8');
  await Saucedemo_checkOut.assert();
  await Saucedemo_checkOut.fill_details();
  console.log('9');
  await Saucedemo_checkOut.click_continue();
});

When(/^checkout$/, async() => {
	await Saucedemo_overview.assert();
  await Saucedemo_overview.click_finish();
});

Then(/^receive Thank you message$/, async() => {
	await Saucedemo_thankyouPage.assert();
  await Saucedemo_thankyou.ss();
});





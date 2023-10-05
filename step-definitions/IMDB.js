const {Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const IMDB =require('../pageobjects/IMDB.page');
Given(/^IMDB site$/, async() => {
	await IMDB.open();
});

When(/^click on menu$/, async() => {
	await IMDB.menu();
});

Then(/^clcik on Top 250 movies$/, async() => {
	await $("//*[@class='ipc-list__item nav-link sc-jIRcFI kOHUKn ipc-list__item--indent-one'][@href='/chart/top/?ref_=nv_mv_250']").click();
});


When(/^select the movie '1. The Shawshank Redemption'$/, async() => {
	await $("//*[@class='ipc-title-link-wrapper'][@href='/title/tt0111161/?ref_=chttp_t_1']").click();
  //await $("//*[@id='__next']/main/div/section[1]/section/div[3]/section/section/div[2]/div[2]/div/div[2]/button").click();
});

Then(/^rate the movie$/, async() => {
	await $("//*[@id='__next']/main/div/section[1]/section/div[3]/section/section/div[2]/div[2]/div/div[2]/button").click();
  //await browser.getAlertText();
  //await $("//*[@class='ipc-starbar__rating']//*[@class='ipc-starbar__rating__button'][@aria-label='Rate 10']").click();
  //(await $("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/div/div[2]/button[10]")).click();
 // await $("//*[@class='ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-accent1 ipc-btn--theme-baseAlt ipc-rating-prompt__rate-button']").click();
});
//----------------------------------------------------------


When(/^click on searh for a movie Jailer$/, async() => {
	await IMDB.search();
});

Then(/^click on Actor Divya$/, async() => {
	//await $("//*[@data-testid='title-cast-item__actor'][@href='/name/nm0482320/?ref_=tt_cl_t_2']").click();
  await $('//*[@id="__next"]/main/div/section[1]/div/section/div/div[1]/section[3]/div[2]/div[2]/div[2]/div[2]/a').click();
  //await browser.saveScreenshots('./mohanlal.png');
  await browser.pause(3000);
  await browser.saveScreenshot('./Divya.png');
});


const {Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HotelPage = require('../pageobjects/hotel.page')

Given(/^I am in hotel.com$/, async() => {
	await HotelPage.open();
});



When(/^place is Goa , from Septemner 28 to 30 and 2 adults$/, async() => {
	await HotelPage.dropdown();
	
	//await browser.place.click();
        //await .place.setValue('Goa');
		//await browser.pause(2000);
       //await this.place.waitForExist();
       //await this.selectByVisibleText('Goa India');
       // await this.Dropbox.click();
			 //--------------------------- DATE.................
			// await $("//*[@id='lodging_search_form']/div/div/div[2]/div/div/div/div/button")


});


Then(/^click on search$/, async() => {
	(await $('#search_button')).click();
});




const {$} =require('@wdio/globals')

class Hotel{

    get place(){
        //return $("//button[@aria-label='Going to']");
       // return $("//button[@class='uitk-fake-input uitk-form-field-trigger'][@type='button'][@data-stid='destination_form_field-menu-trigger']");
        //return $('//*[@id="lodging_search_form"]/div/div/div[1]/div/div[2]/div[1]/button');
        //return $("//*[@]")
    }
    get Dropbox(){
        // return $("//button[@aria-label='Goa India']");
        return $("//*[@id='destination_form_field-menu']/section/div/div[2]/div/ul/li[1]/div/button");
    }

    async dropdown(){
       // await this.place.click();
        await $("//*[@class='uitk-field has-floatedLabel-label has-icon']//*[@class='uitk-fake-input uitk-form-field-trigger']").click();
       // await this.place.clearValue();
       await $("//*[@id='lodging_search_form']/div/div/div[1]/div/div[2]/div[1]/input").clearValue();
        await this.place.setValue('Goa');
        await $("//*[@id='lodging_search_form']/div/div/div[1]/div/div[2]/div[1]/input").setValue('Goa');
        await browser.pause(3000);
       //await this.place.waitForExist();
       //await this.selectByVisibleText('Goa India');
       //await this.Dropbox.waitForClickable();
       await this.Dropbox.click();

    //--------------------------------
     
        
    }

    async open(){
        await browser.maximizeWindow();
        await browser.url('https://in.hotels.com/');
        await browser.pause(3000);
    }

}
module.exports = new Hotel();
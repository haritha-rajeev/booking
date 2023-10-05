const {$} =require('@wdio/globals')

class overview{

  async assert(){
    await expect($("//div[@class='header_secondary_container']//span[@class='title']")).toHaveText('Checkout: Overview');
  }

async click_finish(){
  await $("//button[@id='finish']").click();
}  
   
    }


module.exports = new overview();
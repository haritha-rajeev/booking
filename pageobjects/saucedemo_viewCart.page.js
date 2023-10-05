const {$} =require('@wdio/globals')

class ViewCart{

  async assert(){
  await expect($("//div[@class='header_secondary_container']//span[@class='title']")).toHaveText('Your Cart');
  }

  async click_checkOut(){
    await $("//button[@id='checkout']").click();
  }
   
    }


module.exports = new ViewCart();
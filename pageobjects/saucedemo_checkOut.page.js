const {$} =require('@wdio/globals')

class checkOutPage{
async assert(){
await expect($("//div[@class='header_secondary_container']//span[@class='title']")).toHaveText('Checkout: Your Information');
}



 async fill_details(){
  await $("//input[@id='first-name']").setValue('Haritha');
  await $("//input[@id='last-name']").setValue('Rajeev');
  await $("//input[@id='postal-code']").setValue('680506');
 }

 async click_continue(){
  await $("//input[@id='continue']").click();
 }
   
    }


module.exports = new checkOutPage();
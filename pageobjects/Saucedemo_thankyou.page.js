const {$} =require('@wdio/globals')

class thankYou{

 async assert(){
  await expect($("//h2[@class='complete-header']")).toHaveText('Thank you for your order!');
 }
 async ss(){
  await browser.saveScreenshot('./Purchase.png');
 }
   
    }


module.exports = new thankYou();
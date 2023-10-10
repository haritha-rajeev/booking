const {$} =require('@wdio/globals')

class main{

  async open(){
    await browser.maximizeWindow();
    await browser.url('https://in.bookmyshow.com/');
    await browser.pause(6000);
    
  }
  async select_Kochi(){
    await $("//div[@class='bwc__sc-ttnkwg-17 gvzyfS']/img[@alt='KOCH']").click();
  }

   
    }


module.exports = new main();
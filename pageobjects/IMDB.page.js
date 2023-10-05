const {$} =require('@wdio/globals')

class MainPage{

  async open(){
    await browser.maximizeWindow();
    await browser.url('https://www.imdb.com/');
    
  }
  async menu(){
   await $("//*[@id='imdbHeader-navDrawerOpen']").click();
   await browser.pause(2000);
  }
  async search(){
    await $("//*[@id='suggestion-search']").setValue('jailer');
    //await $("//*[@class='sc-fnGiBr iHHJpz searchResult--active searchResult searchResult--const']").click();
    await $("//*[@id='react-autowhatever-navSuggestionSearch--item-3']/a/div[2]").click();

  }
}



module.exports = new MainPage();
const {$} =require('@wdio/globals')

class mainPage{

  async pageAssert(){
    await expect (await $("//*[@class='app_logo']")).toBeDisplayed('Swag Labs');
  }
  async add(){
    await $("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']").click();
  }

  async addToCart(){
    await $("//a[@class='shopping_cart_link']").click();
  }
   
    }


module.exports = new mainPage();
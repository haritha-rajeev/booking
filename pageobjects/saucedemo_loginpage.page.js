const {$} =require('@wdio/globals')

class loginPage{

  async open(){
    await browser.maximizeWindow();
    await browser.url('https://www.saucedemo.com/');
    
  }

  async wrong_cred(){
    await $("//input[@id='user-name']").setValue('locked_out_user');
  await $("//input[@id='password']").setValue('blah');
  await $("//input[@id='login-button']").click();
  }

  async wrong_assert(){
    await expect (await $("//*[@data-test='error']")).toBeDisplayed('Epic sadface: Sorry, this user has been locked out.');
  }

  async correct_cred(){
    await $("//input[@id='user-name']").setValue('standard_user');
  await $("//input[@id='password']").setValue('secret_sauce');
  await $("//input[@id='login-button']").click();
  }
  
   
    }


module.exports = new loginPage();
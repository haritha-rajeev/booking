const {$} =require('@wdio/globals')

class loginPage{

  async open(){
    await browser.maximizeWindow();
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
  }

  async login(){
    await $("//input[@name='username']").setValue('Admin');
  await $("//input[@name='password']").setValue('admin123');
  await $("//button[@type='submit']").click();
  console.log('1');
  }
   
    }


module.exports = new loginPage();
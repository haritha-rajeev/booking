const {$} =require('@wdio/globals')

class add_as_admin{

  async assert(){
   await expect( $("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']")).toHaveText('Add User');
  }
 
  async employee_to_admin(){
//USER ROLE
   await $("//label[starts-with(text(),'User Role')]/parent::div/following-sibling::div/div[@class='oxd-select-wrapper']/div").click();
   await $("//div[@class='oxd-select-option']//span[starts-with(text(),'Admin')]").click();

//STATUS
await $("//label[starts-with(text(),'Status')]/parent::div/following-sibling::div/div/div").click();
await $("//span[starts-with(text(),'Enabled')]/parent::div").click();

//USERNAME
await $("//label[starts-with(text(),'Username')]/parent::div/following-sibling::div/input").setValue('always');


//PASSWORD
await $("//label[starts-with(text(),'Password')]/parent::div/following-sibling::div/input").setValue('Abcdefg123@');

//CONFIRM PASSWORD
await $("//label[starts-with(text(),'Confirm')]/parent::div/following-sibling::div/input").setValue('Abcdefg123@');


   //EMPLOYEE NAME
   await $("//input[@placeholder='Type for hints...']").setValue('Haritha Koorkkaparambil');
   const element=await $("//input[@placeholder='Type for hints...']/following::span[starts-with(text(),'Haritha')][1]");
   await element.waitForExist({ timeout: 5000 });
   await element.click();
  
   await browser.keys("Enter");

    //SAVE 
    await $("//button[@type='submit']").click();

    await browser.pause(10000);
  }
  
    }


module.exports = new add_as_admin();
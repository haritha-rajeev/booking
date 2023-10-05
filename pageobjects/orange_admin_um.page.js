const {$} =require('@wdio/globals')

class um{

  async click_on_add(){
    await $("//button[@type='button'][@class='oxd-button oxd-button--medium oxd-button--secondary']").click();
  }

 async search_for_admin (){
  //USERNAME
  await $("//div[@class='oxd-input-group oxd-input-field-bottom-space']//input[@class='oxd-input oxd-input--active']").setValue('Admin');
 //USER ROLE
  const selectBox = await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div');
  //const selectBox = await $("//label[contains(text(),'User Role')]/parent::div/following::div//div[@class='oxd-select-text oxd-select-text--focus']//div[@class='oxd-select-text-input']");
  await selectBox.click();
 // await selectBox.selectByVisibleText('Admin');
 await $("//div[@class='oxd-select-option' and span[text()='Admin']]").click();
//EMPLOYEE NAME
 await $("//input[@placeholder='Type for hints...']").setValue('123 Collings');
 //STATUS
 //const select = await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div[1]');
 const select =await $("//label[@class='oxd-label'][contains(text(),'Status')]/parent::div/following::div/div[@class='oxd-select-wrapper']/div/div[@class='oxd-select-text-input']");
 await select.click();
await $("//div[@class='oxd-select-option' and span[text()='Enabled']]").click();

 await $("//button[@type='submit']").click();

 console.log('lol');

 //(await $("//div[@class='oxd-form-actions']//button[@type='button']")).click();
 
 }


 async assert(){
  await expect( $("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).toHaveText('Invalid');
 }

 async click_on_pim(){
  //(await $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]')).click();
  await $("//li[@class='oxd-main-menu-item-wrapper']//a[@class='oxd-main-menu-item'][@href='/web/index.php/pim/viewPimModule']").click();
  
  
  //await $("//button[@type='button'][@class='oxd-button oxd-button--medium oxd-button--secondary']").click();
 }

  
  }
   
    


module.exports = new um();
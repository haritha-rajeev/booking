const {$} =require('@wdio/globals')


class details{


  async click_on_admin(){
    await $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
    //await $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
   // await $("//a[@class='oxd-main-menu-item'][@href='/web/index.php/admin/viewAdminModule']").click();
  }

  async assert(){
await expect($("//*[@class='oxd-text oxd-text--h6 --strong']")).toHaveText('Haritha Rajeev');
  }

  async fill(){
    //await $("//input[@class='oxd-input oxd-input--active'][@placeholder='Search']").setValue('Hardha');

    //NICKNAME
    await $("//label[contains(text(),'Nickname')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input[@class='oxd-input oxd-input--active']").setValue('Hardha');
    
    
    //OTHER ID
    await $("//label[contains(text(),'Other Id')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input[@class='oxd-input oxd-input--active']").setValue('123A');
  
  
    //DRIVERS LICENSE NUMBER
    //await $("//label[starts-with(text(),'Driver')]/parent::div/following-sibling::div/input[@class='oxd-input oxd-input--focus']").setValue('344444444');
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input').setValue('344444444');
   

    //LINCENSE EXPIRY DATE
    const datebox = await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input');
    await datebox.click();
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[3]/div[12]/div').click();
  /*  const datebox= $("//label[starts-with(text(),'License')]/parent::div/following-sibling::div/div/div/input[@class='oxd-input oxd-input--focus']");
    await datebox.click();
    await $("//div[@class='oxd-calendar-date'][contains(text(),'11')]").click();
    */


 //SSN NUMBER
 //await $("//label[starts-with(text(),'SSN')]/parent::div/following-sibling::div/input[@class='oxd-input oxd-input--focus']").setValue('123###');
  await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[3]/div[1]/div/div[2]/input').setValue('123###');
 
 
  //SIN NUMBER
  //await $("//label[starts-with(text(),'SIN')]/parent::div/following-sibling::div/input").setValue('ggg3311');
  await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[3]/div[2]/div/div[2]/input').setValue('ggg3311');
  
  
  //NATIONALITY
  /*
    const select1 = await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div[1]/div[1]');
    select1.click();
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div[2]/div[83]/span').click();
    */
   
   const select1 = await $("//label[starts-with(text(),'Nationality')]/parent::div/following-sibling::div/div/div");
   select1.click();
   await $("//div[@class='oxd-select-option']//span[starts-with(text(),'Indian')]").click();
    
    


   //MARITAL STATUS
   const select2= await $("//label[starts-with(text(),'Marital')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/div/div");
   select2.click();
   await $("//span[starts-with(text(),'Single')]").click();
    /*
    const select2 = await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div/div[1]');
    select2.click();
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div[2]/div[2]/span').click();
   */
    


 //radio
 await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/label/span').click();



 //MILITARY SERVICES
await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input').setValue('Nil');
//await $("//label[starts-with(text(),'Military Service')]/parent::div/following-sibling::div/input").setValue('Nil');



   //await $('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div[1]/input').setValue('2000-09-05');
   //await browser.keyboard.press('Enter');
   //await browser.keys('ENTER');
  // await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[1]').click();
   

   //Save Button
   
  // await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button').click();
   await $("//button[@class='oxd-icon-button oxd-main-menu-button' and @type='button']").click();
   

   await browser.pause(10000);
  }
   
    }


module.exports = new details();
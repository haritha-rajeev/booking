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
    

    //NICKNAME
    //await $("//label[contains(text(),'Nickname')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input[@class='oxd-input oxd-input--active']").setValue('Hardha');
    
    
    //OTHER ID
    await $("//label[contains(text(),'Other Id')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input[@class='oxd-input oxd-input--active']").setValue('123A');
  
  
    //DRIVERS LICENSE NUMBER
    //await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input').setValue('344444444');
      await $("//label[starts-with(text(),'Driver')]/following::input[1]").setValue('344444444');

    //LINCENSE EXPIRY DATE
     const datebox= $("//label[starts-with(text(),'License')]/following::input[1]");
    await datebox.click();
    await $("//div[starts-with(text(),'11')]").click();
    


 //SSN NUMBER
  await $("//label[starts-with(text(),'SSN')]/following::input[1]").setValue('123###');
  
 
 
  //SIN NUMBER
  await $("//label[starts-with(text(),'SIN')]/following::input[1]").setValue('ggg3311');
 
  
  
  //NATIONALITY
    const select1 = await $("//label[starts-with(text(),'Nationality')]/parent::div/following-sibling::div/div/div");
   select1.click();
   await $("//div[@class='oxd-select-option']//span[starts-with(text(),'Indian')]").click();
    
    


   //MARITAL STATUS
   const select2= await $("//label[starts-with(text(),'Marital')]/parent::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/div/div");
   select2.click();
   await $("//span[starts-with(text(),'Single')]").click();


   //DOB
   const dob=await $("//label[starts-with(text(),'Date of Birth')]/following::input[1]");
   dob.click();
   await $("//div[@class='oxd-calendar-selector-year-selected']").click();
   await $("//li[starts-with(text(),'2000')]").click();
   await $("//div[@class='oxd-calendar-selector-month-selected']").click();
   await $("//li[starts-with(text(),'September')]").click();
   await $("//div[starts-with(text(),'5')]").click();


    
    


 //radio
 //await $("//input[@type='radio' and @value='2']").click();
 await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/label/span').click();



 //MILITARY SERVICES
await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/div/div[1]/div/div[2]/input').setValue('Nil');
//await $("//label[starts-with(text(),'Military')]/following::input[1]").setValue('Nil');



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
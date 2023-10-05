const {$} =require('@wdio/globals')

class Add_beg{

  async assert(){
    await expect($("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']")).toHaveText('Add Employee');
  }

   async add_initial(){
    await $("//input[@name='firstName']").setValue('Haritha');
  await $("//input[@name='middleName']").setValue('Koorkkaparambil');
  await $("//input[@name='lastName']").setValue('Rajeev');

  
//const filePath = path.join(__dirname, '../download.jpg');
//const remoteFilePath = await browser.uploadFile(filePath);
//await $("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action'][@type='button']").click();
//await $("//input[@type='file']").setValue(remoteFilePath);
 // const fileInput = await $("//input[@type='file']");
  /*const fileInput = await $("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action'][@type='button']");
  await fileInput.click();
  await fileInput.addValue("./download.jpg");
*/
//await $("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action'][@type='button']").click();


/*const filePath = "C:/Users/97455/Desktop/booking/download.jpg";
 const remoteFilePath = await browser.uploadFile(filePath);
const img_button = await $("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action'][@type='button']");
 await $(img_button).setValue(remoteFilePath);
 */
 //await $('#file-submit').click()



await browser.pause(10000);

  const elem = await $("//button[@type='submit']");
    await elem.waitForDisplayed({ timeout: 6000 });
    await browser.pause(10000);
  await $("//button[@type='submit']").click();
  await browser.pause(10000);
  console.log('end');
   }
    }


module.exports = new Add_beg();
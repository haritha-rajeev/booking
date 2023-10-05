const {$} =require('@wdio/globals')

class dashboard{

async assert(){
  console.log('2');
  await expect( $("//*[contains(@class,'oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')]")).toHaveText('Dashboard');
  console.log('3');
}  
async click_on_admin(){
  //await $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
  await $("//a[@class='oxd-main-menu-item'][@href='/web/index.php/admin/viewAdminModule']").click()
  //await $("//li[@class='oxd-main-menu-item-wrapper']//a[@class='oxd-main-menu-item active']").click();
  console.log('Hi')
}
   
    }


module.exports = new dashboard();
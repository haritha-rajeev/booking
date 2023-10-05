const {$} =require('@wdio/globals')

class pimPage{

  async add_click(){
    await $("//button[@type='button'][@class='oxd-button oxd-button--medium oxd-button--secondary']").click();
  }
  async assert(){
    await expect( $("//span[@class='oxd-topbar-header-breadcrumb']/h6")).toHaveText('PIM');
  }
   
    }


module.exports = new pimPage();
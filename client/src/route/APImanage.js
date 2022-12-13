class ApImanage {
   static baseUrl = "http://localhost:8000/"
   static baseApiUrl = "http://localhost:8000/api/";

   static visitorApi = this.baseApiUrl+"visitor/"
   static contatSend = this.baseApiUrl+"getContactDetails/"
   static siteInfo = this.baseApiUrl+"sendSiteInfo/"
   static categorydetails = this.baseApiUrl+'categorydetails'
   static specialProduct = this.baseApiUrl+'special'
   static featuredProduct = this.baseApiUrl+'featured'
   static newproduct = this.baseApiUrl+'newproduct'
   static getProductListByCategory = this.baseApiUrl+'categoryProduct/'
   static getBannerProduct = this.baseApiUrl+"productDetailsOnBanner"
   static sliderInfo = this.baseApiUrl+'sliderInfo/'
   static notification = this.baseApiUrl+'getNotification/'

   static getProductListBySubCategory=(catName, subCatName)=>{
      return this.baseApiUrl+'subcategoryProduct/'+catName+"/"+subCatName;
   }
   static productDetails=(productDetail)=>{
      return this.baseApiUrl+"productDetails/"+productDetail;
   }


}

export default ApImanage;
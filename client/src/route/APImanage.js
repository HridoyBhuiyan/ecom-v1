class ApImanage {
   static baseUrl = "http://localhost:8000/"
   static baseApiUrl = "http://localhost:8000/api/";

   static visitorApi = this.baseApiUrl+"visitor/"
   static contatSend = this.baseApiUrl+"getContactDetails/"
   static siteInfo = this.baseApiUrl+"sendSiteInfo/"
   static categorydetails = this.baseApiUrl+'categorydetails'
   static specialProduct = this.baseApiUrl+'special'
   static featuredProduct = this.baseApiUrl+'featured'
}

export default ApImanage;
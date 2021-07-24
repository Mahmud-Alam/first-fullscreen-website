function popupContactFunction() {
    var blogPopup = document.getElementById("popupBlog");
    blogPopup.classList.remove("show")

     var contactPopup = document.getElementById("popupContact");
     
     contactPopup.classList.toggle("show");
   }

   function popupBlogFunction() {
   var contactPopup = document.getElementById("popupContact");
   contactPopup.classList.remove("show")

     var blogPopup = document.getElementById("popupBlog");
     blogPopup.classList.toggle("show");
   }
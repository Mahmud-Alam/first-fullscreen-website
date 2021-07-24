var popupAbout = document.getElementById("popupAbout");
var popupService = document.getElementById("popupService");
var popupBlog = document.getElementById("popupBlog");
var popupContact = document.getElementById("popupContact");

function popupAboutFunction() {
    popupService.classList.remove("show")
    popupBlog.classList.remove("show")
    popupContact.classList.remove("show")
    
    popupAbout.classList.toggle("show");
}

function popupServiceFunction() {
    popupAbout.classList.remove("show")
    popupBlog.classList.remove("show")
    popupContact.classList.remove("show")
    
    popupService.classList.toggle("show");
}

function popupBlogFunction() {
    popupAbout.classList.remove("show")
    popupService.classList.remove("show")
    popupContact.classList.remove("show")

    popupBlog.classList.toggle("show");
}

function popupContactFunction() {
    popupAbout.classList.remove("show")
    popupService.classList.remove("show")
    popupBlog.classList.remove("show")

    popupContact.classList.toggle("show");
}

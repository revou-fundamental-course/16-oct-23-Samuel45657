function home(){
    location.replace("https://revou.co/")
}
function profile(){
    location.replace("https://revou.co/alumni")
}
function portofolio(){
    location.replace("https://journal.revou.co/tag/portofolio/")
}
function message(){
    const element= document.getElementById("message");
    element.scrollIntoView();
}
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Form tidak lengkap!");
        return false;
    }
}
console.log("hello");

if(jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}

function signUp() {
    alert("Thank you for signing up for our emails!");
    window.close();
}






let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    if(mobileMenuOpen == false) {
    //if mobile menu is closed, open it
   
        $("#main-menu").removeClass("display-none-mobile");
        mobileMenuOpen = true;
        $("#mobile-menu-text").text("Close");
        $("#mobile-menu-icon").attr("src", "images/ph_x-bold.png");
    }
    //if mobile menu is open, close it
    else {
        $("#main-menu").addClass("display-none-mobile");
        mobileMenuOpen = false;
        $("#mobile-menu-text").text("Menu");
        $("#mobile-menu-icon").attr("src", "images/Group 27.png");
    }
});
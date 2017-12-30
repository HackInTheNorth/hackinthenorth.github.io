// HackRU Fall 2017 Scripts
$(document).ready(function() {

    var pageLocation = window.location.pathname; // used to run certain JS on specific pages

    if (pageLocation == '/' || pageLocation == '/index.ejs') { // run on home page (landing page)
        // console.log("THIS IS THE HOME PAGE.");
        smoothScrollEnable();
    }

    else {
        // on resume file upload, change the notification to say what file was uploaded
        $('#resume-upload-input').on("change", function(){
            changeFileUploadPreview();
        });

        highlightCurrentPageOnMenu();
    }


});

function smoothScrollEnable() {
    // helps smoothly transition to anchor points on the landing page.
    $('a[href*=\\#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
}

function changeFileUploadPreview(){
    // for use in resume uploading on the registration and account management pages.
    var fileName = $("#resume-upload-input").val().replace(/\\/g, '/').replace(/.*\//, '');
    $("#file-selector-notif").text(fileName);

}

function highlightCurrentPageOnMenu() {

    var pageName = window.location.pathname;

    if (pageName.includes("registration")) {
        $('#nav-link-registration').addClass('bold-text');
    }
    else if (pageName.includes("dashboard")) {
        $('#nav-link-dashboard').addClass('bold-text');
    }
    else {

    }
}

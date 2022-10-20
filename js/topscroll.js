window.onload = function() {
    let top_button = document.getElementById("top_button");

};


// Get the button:


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    console.log("test")
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            top_button.style.display = "block";  
        } else {
            top_button.style.display = "none";  
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
     
    document.documentElement.scrollTop = 0;
}
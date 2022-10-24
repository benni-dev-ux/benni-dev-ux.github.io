window.onload = function() {
    let top_button = document.getElementById("top_button");

    window.onscroll = function() {
        scrollFunction();
    };
};

function scrollFunction() {
    if (
        document.body.scrollTop > 900 ||
        document.documentElement.scrollTop > 900
    ) {
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}
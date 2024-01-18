document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    var foot = document.querySelector("footer");
    var sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#f0e6d7";
            foot.style.backgroundColor = "#f0e6d7"
        } else {
            nav.style.backgroundColor = "#f4f0ec";
            foot.style.backgroundColor = "#f4f0ec";
        }
    });

    // Dynamically set padding for sections based on the height of the navigation bar
    function setSectionPadding() {
        var navHeight = nav.clientHeight;
        sections.forEach(function (section) {
            section.style.paddingTop = navHeight + "px";
        });
    }

    // Initial padding setup
    setSectionPadding();

    // Update padding when the window is resized (in case of responsive design)
    window.addEventListener("resize", setSectionPadding);
});

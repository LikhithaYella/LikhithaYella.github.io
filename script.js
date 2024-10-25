// Toggle the navbar visibility when the hamburger is clicked
document.querySelector(".hamburger").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none"; // Hide if already visible
    } else {
        navbar.style.display = "block"; // Show if hidden
    }
});

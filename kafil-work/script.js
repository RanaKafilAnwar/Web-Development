window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "10";
    } else {
      document.getElementById("navbar").style.padding = "15px";
    }
    console.log("hello")
}

// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});


if(navigator.geolocation){

    navigator.geolocation.watchPosition(function(pos){
        console.log("Latitude" + pos.coords.latitude + "Longitutde " + pos.coords.longitude)
      document.getElementById('d').innerHTML='<a href="https://www.google.com/maps/search/?api=1&query=' + pos.coords.latitude + ',' + pos.coords.longitude + '">Location</a>'
    })
}


document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('active');
            var content = button.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
        });
    });
});
        

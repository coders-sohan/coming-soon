(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Sep 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

// toggle nav

$(document).ready(function(){
    jQuery(".bar").click(function(){
        jQuery(".toggle-nav").toggleClass("active");
        jQuery(this).toggleClass("active-toggle");
        var active_toggle = jQuery(".bar").hasClass("active-toggle");
        if(active_toggle === true){
            jQuery(".bar i").removeClass("fa-bars");
            jQuery(".bar i").addClass("fa-times");
        }else{
            jQuery(".bar i").addClass("fa-bars");
            jQuery(".bar i").removeClass("fa-times");
        }
    });
});

// Security

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }
  
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }
  }

// disable right click

$(document).ready(function(){
    jQuery(document).ready(function(){
        jQuery(function() {
              jQuery(this).bind("contextmenu", function(event) {
                  event.preventDefault();
              });
          });
    });
});
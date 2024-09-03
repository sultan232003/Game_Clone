AOS.init();

// CUSTOM NAV TO ADD COLOR ON SCROLL

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 500) {
    $(".nav-menu").addClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});

// CUSTOM NAV TO ADD COLOR ON SCROLL

// SCROLL TO TOP

var btn = $('.scroll-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// SCROLL TO TOP

// OWL CAROUSEL

$('.gear-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:4
    }
  }
})


$('.merch-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:4
    }
  }
})


$('.boost-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:4
    }
  }
})

// OWL CAROUSEL

// COUNTER

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".count-up").each(function () {
      var $this = $(this),
      countTo = $this.attr("data-number");
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString("en")
              );
            },
            complete: function () {
              $this.text(
                Math.ceil(this.countNum).toLocaleString("en")
                );
              }
            }
            );
          });
          a = 1;
        }
      });
      
// COUNTER

// MOUSE POINTER

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
  
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  
  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

// MOUSE POINTER

// BANNER BACKGROUND MOVE

const bg = document.querySelector(".background-image");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 50px)` + `perspective(1000px)`;
});

// BANNER BACKGROUND MOVE
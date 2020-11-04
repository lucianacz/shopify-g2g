// Accordion 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//SLICK
$('.logo-bar').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        }
      }
  ]
});

$('.block-slider').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: 'unslick'
    }
  ]
});


$('.meta-photos').slick({
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1
});
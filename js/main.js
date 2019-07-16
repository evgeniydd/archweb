// const slides = document.getElementById('slides');
// const boxes = document.getElementById('boxes');
// slides.classList.add('active');

// // function slide() {
// //   slides.classList.add('active');
// //   boxes.classList.add('boxes-anim');
// // }

// //Change values of pages
// function slide2() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '8888$';
// }

// function slide3() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '1600$';
// }
// function slide4() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '2323$';
// }

// function slide5() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '6557$';
// }
// function slide6() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '2342$';
// }

// function slide7() {
//   slides.classList.add('active2');
//   document.getElementById('cost').innerText = '3456$';
// }
// // Back button
// function back() {
//   slides.classList.remove('active2');
// }

// var slide1 = document.getElementById('slide1');
// var slides = document.getElementById('slides');

// function slide() {
//   // slides.classList.add('active');
//   boxes.classList.add('boxes-anim');

//   const screen = window.innerWidth;

//   var slides = document.getElementById('slides');

//   slides.style.cssText = 'transform: translateX(-' + 100 + 'px);';
// }

// currSlide = Math.min(Math.max(0, currSlide + n), slide1.length - 1);

// window.addEventListener('resize', go);

// function go() {
//   var displacment = window.innerWidth * currSlide;
//   var myCss = 'transform: translateX(-' + displacment + 'px);';
// }

jQuery(document).ready(function($) {
  'use strict';

  $(function() {
    // cache

    var currSlide = 0;
    var $slides = $('.slides');
    var $slide = $('.slide');

    function showSlide(n) {
      // n is relative position from current slide
      // increment slide number by n and keep within boundaries
      currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);
      var displacment = window.innerWidth * currSlide;
      // translate slides div across to appropriate slide
      $slides.css('transform', 'translateX(-' + displacment + 'px)');
    }

    $('.link').click(function(e) {
      // When link clicked, find slide it points to
      var newslide = parseInt($(this).attr('href')[1]);
      // find how far it is from current slide
      var diff = newslide - currSlide - 1;

      showSlide(diff); // show that slide
      e.preventDefault();
    });

    $(window).resize(function() {
      // Keep current slide to left of window on resize
      var displacment = window.innerWidth * currSlide;
      $slides.css('transform', 'translateX(-' + displacment + 'px)');
    });
  });
  //

  $('.box').click(function() {});
  // Change cost of Pages
  var $cost = $('#boxes a');
  $cost.bind('click', function() {
    if ($cost.index(this) == 0) {
      $('#cost').text('8888$');
    } else if ($cost.index(this) == 1) {
      $('#cost').text('1231$');
    } else if ($cost.index(this) == 2) {
      $('#cost').text('2500$');
    } else if ($cost.index(this) == 3) {
      $('#cost').text('1500$');
    } else if ($cost.index(this) == 4) {
      $('#cost').text('2400$');
    } else {
      $('#cost').text('5600$');
    }
  });

  // Phone number mask
  $('.input').mask('+38 (999) 999-99-99');

  $('.btn-submit').click(function() {
    if ($('.input') == true) {
      alert('Спасибо');
    }
  });

  $('.btn-submit').click('submit', function() {
    var phone = $("input[type='tel']").val();
    var reges = /[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
    if (phone.search(reges) == -1) {
      return false;
    } else {
      alert('Cпасибо');
      return true;
    }
  });
});

//

//
//////

//
// //
// 'use strict';
// var currSlide = 0;
// var slides = document.getElementById('slides');
// var slide = document.getElementsByClassName('slide');
// var btn = document.getElementsByClassName('btn');

// function showSlide(n) {
//   currSlide = Math.min(Math.max(0, currSlide + n), slide.length - 1);

//   var displacment = window.innerWidth * currSlide;

//   slides.style.cssText = 'transform: translateX(-' + displacment + 'px);';
// }

// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', function(e) {
//     var x = document.getElementsByClassName('btn')[1].getAttribute('href');

//     var newslide = parseInt(x[1]);
//     var diff = newslide - currSlide - 1;

//     alert(newslide);
//     alert(currSlide);
//     alert(diff);

//     showSlide(diff);

//     e.preventDefault();
//   });
// }

// window.addEventListener('resize', function() {
//   var displacment = window.innerWidth * currSlide;
//   slides.style.cssText = 'transform: translateX(-' + displacment + 'px);';
// });
//

//

//// TESTED
//
//
//
// var btn = document.getElementById('but');

// btn.addEventListener('click', function(e) {
//   alert('sds');

//   slides.style.cssText = 'transform: translateX(-' + 100 + 'px);';
//   e.preventDefault();
// });

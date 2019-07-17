
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


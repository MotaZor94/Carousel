const $ = (elem) => {
    return document.querySelector(elem);
  }
  const hasClass = (el, className) => {
    return el.classList ? el.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
  const addClass =(el, className) => {
    if (el.classList) {
     el.classList.add(className);
    } else {
     el.className += ' ' + className
    }
  }
  const removeClass = (el, className) => {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  let slider_plugin = (function() {
    let fifi_slider = function(settings) {
    }
    return fifi_slider;
  })();

  let fifi_slider = function(settings) {
    let _ = this;
    _.def = {
      target: $('.slider'),
      dotsWrapper: $('.dots-wrapper'),
      arrowLeft: $('.arrow-left'),
      arrowRight: $('.arrow-right'),
      transition: {
        speed: 300,
        easing: ''
      },
      swipe: true,
      autoHeight: true,
      afterChangeSlide: function afterChangeSlide() {}
    };
  }
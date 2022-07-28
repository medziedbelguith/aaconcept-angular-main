//Get the button:
navbar = document.getElementsByClassName("navbar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

isAfficheChiffre = false;

function scrollFunction() {
  /*if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar[0].className = "navbar navbar-blanc";
  } else {
    navbar[0].className = "navbar navbar-blanc";
  }*/

  var stats = document.getElementById("stats");
  if(stats != null){
    if(isScrolledIntoView(stats) && !isAfficheChiffre){
      const counters = document.getElementsByClassName("value");
      console.log("into view");
      animateValue(counters[0], 0, 1200, 1000);
      animateValue(counters[1], 0, 2120, 1000);
      animateValue(counters[2], 0, 1012, 1000);
      animateValue(counters[3], 0, 60, 1000);
      isAfficheChiffre = true;
    }
  }
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function isScrolledIntoView(el) {
  const { top, bottom } = el.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight
}

window.addEventListener('load', function () {
})



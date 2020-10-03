const counters = document.querySelectorAll(".counter");
const speed = 300;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = parseInt(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// When the user scrolls down 20px from the top of the document, show the button
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
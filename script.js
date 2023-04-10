const headings = ['Sagar Khadka', 'A Web Developer', 'A CsIT Student'];
let currentHeadingIndex = 0;
let isAnimating = false;

setInterval(() => {
  const currentHeading = headings[currentHeadingIndex];
  if (!isAnimating) {
    animateHeading(currentHeading);
    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
  }
}, 3000);

function animateHeading(headingText) {
  const headingElement = document.getElementById('name');
  const len = headingElement.textContent.length;
  isAnimating = true;

  // check if the heading is already visible
  if (headingElement.style.animation === 'typing 2s steps(40) forwards') {
    // start the erasing animation
    let delay = 0;
    for (let i = 0; i < len; i++) {
      delay = i * 50;
      setTimeout(() => {
        headingElement.textContent = headingText.slice(0, len - i);
      }, delay);
    }
    setTimeout(() => {
      // after erasing, start the typing animation
      headingElement.style.animation = 'typing 2s steps(40) forwards';
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < headingText.length) {
          headingElement.textContent += headingText[index];
          index++;
        } else {
          clearInterval(typingInterval);
          isAnimating = false;
        }
      }, 100);
    }, len * 50);
  } else {
    // start the typing animation
    headingElement.textContent = '';
    headingElement.style.animation = 'typing 2s steps(40) infinite';
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < headingText.length) {
        headingElement.textContent += headingText[index];
        index++;
      } else {
        clearInterval(typingInterval);
        isAnimating = false;
      }
    }, 100);
  }
}

            
function toogleMenu() {
    const showHide = document.getElementById("links");
    showHide.classList.toggle("show-hide");
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    autoplayHoverPause: true,
    autoplaySpeed: 200,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
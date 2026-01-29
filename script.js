
  const images = [
    "Rectangle 6 (2).png",
    "download2.jpg",
    "download (7).jpg"
  ];

  let index = 0;
  const img = document.getElementById("mainImage");

  function changeImage(){
    img.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % images.length; // loop
      img.src = images[index];
      img.classList.remove("fade-out");
    }, 250);
  }
const slideElements = document.querySelectorAll('.slide-left-box, .slide-right-box');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // viewport se bahar jaane par remove class
          entry.target.classList.remove('active');
        }
      });
    },
    { threshold: 0.3 } // 30% element visible hone par trigger
  );

  slideElements.forEach(el => observer.observe(el));

  const bounceElements = document.querySelectorAll('.bounce-box');
document.addEventListener("DOMContentLoaded", function() {
  const bounceElements = document.querySelectorAll('.bounce-box');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active'); // scroll out → reset
          }
        });
      },
      { threshold: 0.3 } 
    );

    bounceElements.forEach(el => observer.observe(el));
  } else {
    bounceElements.forEach(el => el.classList.add('active'));
  }
});

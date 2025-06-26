let mainTrustSwiper = new Swiper(".main-trust__swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
});



const progressCircle = document.querySelector('.ring-progress');
const radius = 46;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  setProgress(scrollPercent);
});
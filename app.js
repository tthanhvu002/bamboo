const slider = document.querySelector('.slider')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const width = document.querySelector('.slider .item').offsetWidth
nextBtn.onclick = () => {
  slider.scrollLeft += width
}
prevBtn.onclick = () => {
  
  slider.scrollLeft -= width
}
function initCarousel() {
  // ваш код...
  const carousel = document.querySelector('.carousel__inner')
  const carouselWidth = carousel.offsetWidth
  const nextBtn = document.querySelector('.carousel__arrow_right')
  const prevBtn = document.querySelector('.carousel__arrow_left')
  let countClick = 0

  prevBtn.style.display = 'none'
  nextBtn.addEventListener('click', () => {
    countClick = ++countClick
    carousel.style.transform = `translateX(-${carouselWidth*countClick}px)`
    if(countClick === 3) {
      nextBtn.style.display = 'none'
    } else {
      nextBtn.style.display = ''
      prevBtn.style.display = ''
    }
  })

  prevBtn.addEventListener('click', () => {
    countClick = --countClick
    carousel.style.transform = `translateX(-${carouselWidth*(countClick)}px)`
    if(countClick === 0) {
      prevBtn.style.display = 'none'
    } else {
      prevBtn.style.display = ''
      nextBtn.style.display = ''
    }
  })
}

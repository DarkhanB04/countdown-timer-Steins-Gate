function playSong(){
    var audio = new Audio('audio/hoho.mp3')
    audio.play();
}
const countToDate = new Date("2009-10-15T00:00:00")
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 1000)

function flipAllCards(time) {
  const dayss = Math.floor(time/60/60/24)
  const hours = Math.floor(time / 60 / 60)% 24
  const hourss = hours - hours - hours;
  const minutes = Math.floor(time / 60) % 60
  const minutess = minutes - minutes - minutes;
  const seconds = time % 60
  const secondsa = seconds - seconds - seconds;

  const firstDigitOfDay= (''+ dayss)[1];
  const secondDigitOfDay= (''+ dayss)[2];
  const thirdDigitOfDay= (''+ dayss)[3];
  const fourthDigitOfDay= (''+ dayss)[4];
  


  flip(document.querySelector("[data-days-tens]"), Math.ceil(firstDigitOfDay))
  flip(document.querySelector("[data-days-ones]"), Math.ceil(secondDigitOfDay))
  flip(document.querySelector("[data-days-dones]"), Math.ceil(thirdDigitOfDay))
  flip(document.querySelector("[data-days-gones]"), Math.ceil(fourthDigitOfDay))
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hourss / 10))
  flip(document.querySelector("[data-hours-ones]"), hourss % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutess / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutess % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(secondsa / 10))
  flip(document.querySelector("[data-seconds-ones]"), secondsa % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
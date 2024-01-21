let burger = document.querySelector('.header .burger')
let menu = document.querySelector('.header .menu')

burger.addEventListener('click', function () {
   menu.classList.toggle('active')
   console.log('asdasd')
})
let promise = document.querySelectorAll('video')
promise.forEach(el => {
   el.play()
})
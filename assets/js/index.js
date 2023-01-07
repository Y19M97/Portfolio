let screen = document.getElementById('screen')
let lightContainer = document.getElementById('lightContainer')
let lightBox = document.getElementById('lightBox')
let imgList =document.querySelectorAll('.project img')
console.log(imgList);
screen.addEventListener('click',function(){
    screen.classList.toggle('toggleScreen')
})
// -----------------------
for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click',function(e){
        // $('.project img').toggleClass('w-50')
        lightContainer.classList.remove('d-none')
        lightContainer.classList.remove('d-none')
        var imgScr = e.target.getAttribute('src')
        lightBox.style.backgroundImage =`url(${imgScr})`
    })
    
}


lightBox.addEventListener('click',function(){
    lightContainer.classList.add('d-none')

})



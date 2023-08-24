const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const img = document.querySelector('img')
const button = document.querySelector('button')

img.addEventListener('click', (e) =>{
    screenOne.classList.add('hidden')
    screenTwo.classList.remove('hidden')
    
    console.log('olá mundo');
})

button.addEventListener('click', (e) => {
    screenOne.classList.remove('hidden')
    screenTwo.classList.add('hidden')
})

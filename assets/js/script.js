var popup = document.getElementById('register-popup')
var  createcompte = document.getElementById('create-account-button')
var transparence = document.getElementById('overlay')
var fermer = document.getElementById('close-register')
//pour provoquer un comportement en js il faut cree un evenement.
createcompte.addEventListener('click',(e)=> {
    e.preventDefault()
    popup.style.display = 'block'
    transparence.style.display = 'block'
})

fermer.addEventListener('click', ()=> {
    popup.style.display = 'none'
    transparence.style.display = 'none'
})
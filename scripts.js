const modalOverlay = document.querySelector ('.modal-overlay')
const aulas = document.querySelectorAll ('.curso')


for (let aula of aulas) {
    aula.addEventListener('click', function(){
  const cursoId = aula.getAttribute('id')
   modalOverlay.classList.add('active')
   modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
   
   
    })
}

document.querySelector('.close_modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})
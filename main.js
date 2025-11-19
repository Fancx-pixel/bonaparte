const toggleBtn = document.getElementById('toggle')
const sidebar = document.getElementById('sidebar')

    toggleBtn.addEventListener('click', function(){
        toggleBtn.classList.toggle('active')
        sidebar.classList.toggle('close')
    })

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggle.classList.toggle('rotate')
    }
}
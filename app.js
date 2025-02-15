const dialogoDiv = document.querySelector('.dialogo');
const shareBtn = document.querySelector('.share_contaier')

shareBtn.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('entre aqui')
    if(dialogoDiv.style.visibility === 'hidden'){
        console.log('entre aqui tam')
        dialogoDiv.style.visibility = 'visible'
    }else{
        dialogoDiv.style.visibility = 'hidden'
    }
    
});

document.addEventListener('click', ()=>{
    dialogoDiv.style.visibility = 'hidden'
})

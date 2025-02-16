const dialogoDiv = document.querySelector('.dialogo');
const shareBtn = document.querySelector('.share_contaier')

shareBtn.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('entre aqui')
    if(dialogoDiv.style.display === 'none'){
        console.log('entre aqui tam')
        dialogoDiv.style.display = 'flex'
    }else{
        dialogoDiv.style.display = 'none'
    }
    
});

document.addEventListener('click', ()=>{
    dialogoDiv.style.display = 'none'
})

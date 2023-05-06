
let boton = document.querySelector('.top')

window.onscroll = function(){
    
    //Botón Top

    if(document.documentElement.scrollTop > 250){
        document.querySelector('.top ').style.display='block'
    }
    else{
        document.querySelector('.top ').style.display='none' 
    }

    boton.addEventListener('click', function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })

    //Botón Whatsapp

    if(document.documentElement.scrollTop > 290){
        console.log(document.documentElement.scrollTop)
        document.querySelector('.boton-wsp ').style.display='block'
    }
    else{
        document.querySelector('.boton-wsp ').style.display='none' 
    }
}
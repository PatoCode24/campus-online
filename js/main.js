
//Show/Hide nav menu

const menu = document.querySelector('.nav-menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () =>{
    menu.style.display ="flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})

// Close nav menu

const closeNav = () => {
    menu.style.display ="none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
    window.location.reload()
}

closeBtn.addEventListener('click', closeNav)

/*------------------------------------------------------------------------------*/ 

//Show/Hide Faqs

const faqs = document.querySelectorAll('.faq')

faqs.forEach( faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')

        //Change icon
        const icon = faq.querySelector('.faq-icon i')
        if (icon.className === 'bi bi-plus'){
            icon.className = 'bi bi-dash'
        }else{
            icon.className = 'bi bi-plus'
        }
    })
})






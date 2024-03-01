const pageTurnBtn = document.querySelectorAll('.nextprev-btn')

pageTurnBtn.forEach((e1, index) =>{
    e1.onclick= () => {
        const pageTurnId = e1.getAttribute('data-page')
        const pageTurn = document.getElementById(pageTurnId)

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn')
            setTimeout(()=>{
                pageTurn.style.zIndex=20 - index
            }, 500)
        } else{
            pageTurn.classList.add('turn')
            setTimeout(()=>{
                pageTurn.style.zIndex=20 + index
            }, 500)
        }
    }
})

let TotalPages = pages.length
let PageNumber = 0

const reverseIndex = () =>{
    PageNumber--
    if(PageNumber<0) {
        PageNumber = TotalPages - 1
    }
}


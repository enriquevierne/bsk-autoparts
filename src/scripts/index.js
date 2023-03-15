
const allBtnBanner = () => {

    const btns = document.querySelectorAll('.btn-banner')
    const banner = document.querySelector('.background-banner')
    
    btns.forEach(btn => {

        btn.addEventListener('click', (e) => { 

            banner.classList = ''
            banner.classList.toggle(`${e.target.innerText.toLowerCase()}`)

        })
    })
}

const allBtnsPurchase = () => {

    const btns = document.querySelectorAll('.btn-purchase')

    btns.forEach(btn => {

        btn.addEventListener('click', () => {

            window.location.replace('/src/pages/purchase.html')

        })

    })

}

allBtnBanner()
allBtnsPurchase()
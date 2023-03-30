const backHome = () => {
     
    const btn = document.querySelector('.logo-nav')

    btn.addEventListener('click', () => {
        
        window.location.replace('/index.html')
        
    })
}

const renderBundleBuy = () => {

    const btn = document.querySelector('.title-bundle-buy')
    const img = document.querySelector('.img-bundle-buy')
    const div = document.querySelector('.list-bundle-buy')

    btn.addEventListener('click', () => {
        div.innerHTML = ''
        btn.classList.toggle('active')
        if (btn.classList.contains('active')) {
            img.src = '../assets/down.png'
            div.insertAdjacentHTML('beforeend',  '<img src="../assets/HILUX-OKAY-traseira.jpg" alt=""><img class="plus" src="../assets/plus.png" alt=""><div class="item-bundle-buy"><img src="../assets/S10-OKAY-traseira.jpg" alt=""><div class="info-item-bundle-buy"><p>Extensor e Divisor para S10</p><p>de: R$2.499,90</p><p>por: R$2.199,90</p></div></div><img class="equal" src="../assets/equal.png" alt=""><div class="total-bundle-buy"><p>Compre os 2 com 20% de desconto:</p><h3>R$3.999,80</h3><button class="btn-bundle-buy">Aproveitar</button></div>')
        } else {
            
           
            img.src = '../assets/setaright.png'

        }
    })

}

const renderDescription = () => {

    const btn = document.querySelector('.title-description')
    const img = document.querySelector('.img-description')
    const div = document.querySelector('.content-description')

    btn.addEventListener('click', () => {
        div.innerHTML = ''
        btn.classList.toggle('active')
        if (btn.classList.contains('active')) {
            img.src = '../assets/down.png'
            div.insertAdjacentHTML('beforeend',  '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil ex exercitatonem, asperiores            adipisci veniam nulla nemo omnis dolorem iusto autem alias molestias, amet recusandae voluptatum            officia numquam dolorum aliquam!</p>')
        } else {
            
           img.src = '../assets/setaright.png'

        }
    })

}
const renderEspecification = () => {

    const btn = document.querySelector('.title-especification')
    const img = document.querySelector('.img-especification')
    const div = document.querySelector('.content-especification')

    btn.addEventListener('click', () => {
        div.innerHTML = ''
        btn.classList.toggle('active')
        if (btn.classList.contains('active')) {
            img.src = '../assets/down.png'
            div.insertAdjacentHTML('beforeend',  '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil ex exercitatonem, asperiores            adipisci veniam nulla nemo omnis dolorem iusto autem alias molestias, amet recusandae voluptatum            officia numquam dolorum aliquam!</p>')
        } else {
            
           img.src = '../assets/setaright.png'

        }
    })

}
const renderLegislation = () => {

    const btn = document.querySelector('.title-legislation')
    const img = document.querySelector('.img-legislation')
    const div = document.querySelector('.content-legislation')

    btn.addEventListener('click', () => {
        div.innerHTML = ''
        btn.classList.toggle('active')
        if (btn.classList.contains('active')) {
            img.src = '../assets/down.png'
            div.insertAdjacentHTML('beforeend',  '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil ex exercitatonem, asperiores            adipisci veniam nulla nemo omnis dolorem iusto autem alias molestias, amet recusandae voluptatum            officia numquam dolorum aliquam!</p>')
        } else {
            
           img.src = '../assets/setaright.png'

        }
    })

}

backHome()
renderBundleBuy()
renderDescription()
renderEspecification()
renderLegislation()
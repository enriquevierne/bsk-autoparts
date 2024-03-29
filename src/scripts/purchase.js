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
            div.insertAdjacentHTML('beforeend', '<img class="plus" src="../assets/plus.png" alt=""><div class="item-bundle-buy"><img src="../assets/S10-OKAY-traseira.jpg" alt=""><div class="info-item-bundle-buy"><p>Rampa para Motos fácil uso</p><p>de: R$499,90</p><p>por: R$399,90</p></div></div><img class="equal" src="../assets/equal.png" alt=""><div class="total-bundle-buy"><p>Compre os 2 por apenas:</p><h3>R$1.999,80</h3><a href="https://pagar.vindi.com.br/2qe17" target="_blank" class="btn-bundle-buy">Aproveitar</a></div>')
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
            div.insertAdjacentHTML('beforeend', '<p>Extensor e divisor de caçamba para picape, produto de alta resistência feito em aço carbono e pintado com tinta epóxi brilhante. O produto é leve de fácil manuseio e rápida instalação. Não é necessário fazer furação na caminhonete, pois as chapas auxiliares já são produzidas com exclusividade para cada modelo de picape. O extensor já vem com suporte para terceira placa. Produto dentro da lei do CONTRAN 349 sem necessidade de alteração na documentação do veículo.</p>')
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
            div.insertAdjacentHTML('beforeend', '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil ex exercitatonem, asperiores            adipisci veniam nulla nemo omnis dolorem iusto autem alias molestias, amet recusandae voluptatum            officia numquam dolorum aliquam!</p>')
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
            div.insertAdjacentHTML('beforeend', '<p>Art. 6º - Nos veículos de que trata esta Resolução, será admitido o transporte eventual de carga indivisível, respeitados os seguintes preceitos: I - As cargas que sobressaiam ou se projetem além do veículo para trás, deverão estar bem visíveis e sinalizadas. No período noturno, esta sinalização deverá ser feita por meio de uma luz vermelha e um dispositivo refletor de cor vermelha. II - O balanço traseiro não deve exceder 60% do valor da distância entre os dois eixos do veículo. (figura 2) B £ 0,6 x A, onde B = Balanço traseiro e A = distância entre os dois eixos Resenha Fiscal 3 Art. 7º Será admitida a circulação do veículo com compartimento de carga aberto apenas durante o transporte de carga indivisível que ultrapasse o comprimento da caçamba ou do compartimento de carga.</p>')
        } else {

            img.src = '../assets/setaright.png'

        }
    })

}

const requestCep = async (cep) => {

    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {

        method: 'GET',
        headers: {

            'Content-Type': 'application/json',

        },

    }).then(response => response.json())
        .then((res) => {
            return res
        })

    return request
}

const modalPayment = () => {

    const modal = document.querySelector('dialog')
    const btn = document.querySelector('.btn-checkout')
    const close = document.querySelector('.close')
    const cep = document.querySelector('.cep-result')
    const inputCep = document.querySelector('.cep-input')
    const searchCep = document.querySelector('.cep-search')
    const pixTotal = document.querySelector('.pix-total')
    const creditTotal = document.querySelector('.credit-total')

    pixTotal.innerText = 'Total de R$1599,90'
    creditTotal.innerText = 'Total de R$1699,90'


    btn.addEventListener('click', () => {

        modal.showModal()

    })
    close.addEventListener('click', () => {

        modal.close()

    })
    searchCep.addEventListener('click', async () => {

        const request = inputCep.value
        const cepRequest = await requestCep(request)
        if (cepRequest.erro) {

            cep.innerText = 'CEP inválido'

        } else {

            cep.innerText = `Frete para ${cepRequest.localidade}/${cepRequest.uf}  =  R$79,78`
            pixTotal.innerText = 'Total de R$1.679,68'
            creditTotal.innerText = 'Total de R$1.779,68'
        }
    })


    return
}

const allBtnsPurchase = () => {

    const btns = document.querySelectorAll('.btn-purchase')
    console.log("-> ~ btns:", btns)

    btns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            window.location.replace(`/src/pages/purchase-${e.target.dataset.id}.html`)

        })

    })

}


backHome()
renderBundleBuy()
renderDescription()
/* renderEspecification() */
renderLegislation()
modalPayment()
allBtnsPurchase()
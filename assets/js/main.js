const modal = document.getElementById('salesCart')
const result = document.querySelector(".listTeste")
const cart = []

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none' 
}

shoesJson.map((item, index) => {
    let shoesItem = document.querySelector('.models .card').cloneNode(true)
    
    document.querySelector('#contentesCards').appendChild(shoesItem)

    shoesItem.querySelector('.contentsImage').innerHTML = `<img src="${item.img}"/>`
    shoesItem.querySelector('.nameProduct').innerHTML = item.produto
    shoesItem.querySelector('.priceShoes').innerHTML = `R$ ${item.price.toFixed(2)}`

    
    shoesItem.querySelector('.card a').addEventListener('click', (e) => {
        e.preventDefault()

        const nameShoes = shoesItem.querySelector('.nameProduct').innerText
        const priceShoes = shoesItem.querySelector('.priceShoes').innerHTML.replace('R$&nbsp;', '')

        console.log(`Nome do produto: ${nameShoes}\nPreço do produto: ${priceShoes}`)  

        guardaItens(nameShoes)
    })

})


const guardaItens = (nameShoes) => {
    const listResult = nameShoes.map((nameShoes) => {
            return `
                <li>
                    <h2>Produto: ${nameShoes}</h2>
                </li>
            `;
        }).join('');

    result.innerHTML = listResult
}
 
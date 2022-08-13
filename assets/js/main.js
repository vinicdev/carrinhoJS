const modal = document.getElementById('salesCart')

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
    shoesItem.querySelector('.priceShoes').innerHTML = `R$ ${item.price.toFixed(2)}`

    // console.log(shoesItem)
    
    shoesItem.querySelector('.card a').addEventListener('click', (e) => {
        e.preventDefault()
        
        const preco = document.querySelector('.spaceValue .priceShoes').value
        console.log(`Preço do tenis escolhido: ${preco}`)
    })

})


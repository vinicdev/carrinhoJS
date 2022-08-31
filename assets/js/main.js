const modal = document.getElementById('salesCart')
const result = document.querySelector("#listTable")

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

shoesJson.map((item, index) => {
    let shoesItem = document.querySelector('.models .card').cloneNode(true);
    
    document.querySelector('#contentesCards').appendChild(shoesItem);

    shoesItem.querySelector('.contentsImage').innerHTML = `<img src="${item.img}"/>`
    shoesItem.querySelector('.nameProduct').innerHTML = item.produto
    shoesItem.querySelector('.priceShoes').innerHTML = `R$ ${item.price.toFixed(2)}`

    const sum = 0;
    shoesItem.querySelector('.card a').addEventListener('click', (e) => {
        e.preventDefault()

        const nameShoes = shoesItem.querySelector('.nameProduct').innerText;
        const priceShoes = shoesItem.querySelector('.priceShoes').innerHTML.replace('R$&nbsp;', '');

        console.log(`Nome do produto: ${nameShoes}\nPreço do produto: ${priceShoes}`);

        const node = document.createElement("p");
        const node2 = document.createElement("small");
        const name = document.createTextNode(`${nameShoes}`);
        const price = document.createTextNode(`${priceShoes}`);
        node.appendChild(name);
        node2.appendChild(price);
        result.appendChild(node);
        result.appendChild(node2);
    })
})



 
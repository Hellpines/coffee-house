const items = [
    { category: 'Кофе', name: 'Irish coffee', description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk', cost: '$7.00', img: '../images/coffee-1.png' },
    { category: 'Кофе', name: 'Kahlua coffee', description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk', cost: '$7.00', img: '../images/coffee-2.png' },
    { category: 'Кофе', name: 'Honey raf', description: 'Espresso with frothed milk, cream and aromatic honey', cost: '$5.50', img: '../images/coffee-3.png' },
    { category: 'Кофе', name: 'Ice cappuccino', description: 'Cappuccino with soft thick foam in summer version with ice', cost: '$5.00', img: '../images/coffee-4.png' },
    { category: 'Кофе', name: 'Espresso', description: 'Classic black coffee', cost: '$4.50', img: '../images/coffee-5.png' },
    { category: 'Кофе', name: 'Latte', description: 'Espresso coffee with the addition of steamed milk and dense milk foam', cost: '$5.50', img: '../images/coffee-6.png' },
    { category: 'Кофе', name: 'Latte macchiato', description: 'Espresso with frothed milk and chocolate', cost: '$5.50', img: '../images/coffee-7.png' },
    { category: 'Кофе', name: 'Coffee with cognac', description: 'Fragrant black coffee with cognac and whipped cream', cost: '$6.50', img: '../images/coffee-8.png' },
    { category: 'Чай', name: 'Moroccan', description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint', cost: '$4.50', img: '../images/tea-1.png' },
    { category: 'Чай', name: 'Ginger', description: 'Original black tea with fresh ginger, lemon and honey', cost: '$5.00', img: '../images/tea-2.png' },
    { category: 'Чай', name: 'Cranberry', description: 'Invigorating black tea with cranberry and honey', cost: '$5.00', img: '../images/tea-3.png' },
    { category: 'Чай', name: 'Sea buckthorn', description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon', cost: '$5.50', img: '../images/tea-4.png' },
    { category: 'Десерт', name: 'Marble cheesecake', description: 'Philadelphia cheesecake with lemon zest on a light sponge cake and red currant jam.', cost: '$4.50', img: '../images/dessert-1.png' },
    { category: 'Десерт', name: 'Red velvet', description: 'Tender cake with cream cheese frosting.', cost: '$4.50', img: '../images/dessert-2.png' },
    { category: 'Десерт', name: 'Cheesecake pancakes', description: 'Fluffy cheesecake pancakes with cream and sprinkled with powdered sugar.', cost: '$4.50', img: '../images/dessert-3.png' },
    { category: 'Десерт', name: 'Creme brulee', description: 'Decadent creamy dessert with caramelized sugar.', cost: '$4.00', img: '../images/dessert-4.png' },
    { category: 'Десерт', name: 'Pancakes', description: 'Tender pancakes served with strawberry jam and fresh strawberries.', cost: '$5.00', img: '../images/dessert-5.png' },
    { category: 'Десерт', name: 'Honey cake', description: 'Classic honey cake with delicate custard.', cost: '$5.50', img: '../images/dessert-6.png' },
    { category: 'Десерт', name: 'Chocolate cake', description: 'Rich chocolate cake with chocolate fillings.', cost: '$5.50', img: '../images/dessert-7.png' },
    { category: 'Десерт', name: 'Black forest', description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse.', cost: '$6.50', img: '../images/dessert-8.png' }
];
const coffee = document.querySelector('.types-product .btns .coffee')
const tea = document.querySelector('.types-product .btns .tea')
const dessert = document.querySelector('.types-product .btns .dessert')
const list = document.querySelector('.coffee-items .list');
const modal = document.querySelector('.modal')
const name = document.querySelector('.modal .info h2')
const desc = document.querySelector('.modal .info p')
const img = document.querySelector('.modal .image img');
const close = document.querySelector('.modal .close')

function default_(){
    const newarr = items.filter((el) => {
        if (el.category == 'Кофе') return true
    })
    
    list.innerHTML = ''
    newarr.forEach((el) => {
        list.innerHTML += `<div class="item">
        <img src="${el.img}" alt="">
        <div class="item-text">
        <h2>${el.name}</h2>
        <p>${el.description}</p>
        <h2>${el.cost}</h2>
        </div>
        </div>`
    })
    document.querySelectorAll('.item').forEach((el, index) => {
        el.addEventListener('click', () => {
            modal.style.display = 'block'
            name.textContent = newarr[index].name;
            desc.textContent = newarr[index].description;
            img.src = newarr[index].img
        })
    })
}
default_()

function events(current_category) {
    const newarr = items.filter((el) => (el.category == current_category))
    list.innerHTML = ''
    newarr.forEach((el) => {
        list.innerHTML += `<div class="item">
        <img src="${el.img}" alt="">
        <div class="item-text">
        <h2>${el.name}</h2>
        <p>${el.description}</p>
        <h2>${el.cost}</h2>
        </div>
        </div>`
    })

    document.querySelectorAll('.item').forEach((el, index) => {
        el.addEventListener('click', () => {
            modal.style.display = 'block'
            name.textContent = newarr[index].name;
            desc.textContent = newarr[index].description;
            img.src = newarr[index].img
        })
    })
}

coffee.addEventListener('click', () => events('Кофе'))

tea.addEventListener('click', () => events('Чай'))

dessert.addEventListener('click', () => events('Десерт'))

close.addEventListener('click', () => modal.style.display = 'none')
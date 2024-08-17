const wishList = document.getElementById('wish-list');
const newWishInput = document.getElementById('new-wish');
const addWishButton = document.getElementById('add-wish');

let wishes = [];

addWishButton.addEventListener('click', addWish);

function addWish() {
    const newWish = newWishInput.value.trim();
    if (newWish !== '') {
        wishes.push(newWish);
        newWishInput.value = '';
        renderWishList();
    }
}

function renderWishList() {
    wishList.innerHTML = '';
    wishes.forEach((wish, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = wish;
        listItem.dataset.index = index;
        wishList.appendChild(listItem);
    });
}

renderWishList();


// Favoriler ve Sepet dizileri (localStorage kullanarak kalıcı hale getiriyoruz)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let favcart = JSON.parse(localStorage.getItem('favcart')) || [];

// Favoriler sayacını güncelleyen fonksiyon
function updateFavCount() {
  document.getElementById('fav-count').innerText = favorites.length;
}

// Sepet (favcart) sayacını güncelleyen fonksiyon
function updateFavCartCount() {
  document.getElementById('cart-count').innerText = favcart.length;
}

// Favorilere Ekleme Fonksiyonu
function addToFavorites(cardId, bookName, bookImg , cardText) {
  // Aynı kitabın tekrar eklenmemesi için kontrol
  const exists = favorites.some(item => item.id === cardId);
  if (!exists) {
    favorites.push({ id: cardId, name: bookName, img: bookImg , cardText:cardText});
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    alert(bookName + " favorilere eklendi!");
  } else {
    alert(bookName + " zaten favorilerde!");
  }
}



let favoricart = [];

function addToCart(bookName, bookImg, )  {
    favoricart.push({ name:bookName, img:bookImg, });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";

    if (favoricart.length === 0) {
        cartList.innerHTML = '<li class="list-group-item text-muted">Sepetiniz boş</li>';
    } else {
        favoricart.forEach((book, index) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            li.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${book.img}" style="width:40px; height:auto; margin-right:10px; border-radius:3px;">
                    <span>${book.name}</span>
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></button>
            `;
            cartList.appendChild(li);
        });
    }

    cartCount.innerText = favoricart.length;
}

function removeFromCart(index) {
    favoricart.splice(index, 1);
    updateCart();
}

function clearCart() {
    favoricart = [];
    updateCart();
}

const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const booksVisible = 5; // Aynı anda görünen kitap sayısı
const bookWidth = 190; // Kitap genişliği + margin (150px + 20px)
const totalBooks = gallery.children.length;

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalBooks - booksVisible;
}

function scrollGallery(direction) {
    currentIndex += direction * booksVisible; // 4 kitap birden kaydır
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalBooks - booksVisible) currentIndex = totalBooks - booksVisible;
    gallery.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
    updateButtons();
}

updateButtons();


let cart = [];
        
        function addToCart(bookName, bookImg)  {
            cart.push({ name:bookName, img:bookImg});
            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById("cart-items");
            const cartCount = document.getElementById("cart-count");

            cartList.innerHTML = "";

            if (cart.length === 0) {
                cartList.innerHTML = '<li class="list-group-item text-muted">Sepetiniz boş</li>';
            } else {
                cart.forEach((book, index) => {
                    const li = document.createElement("li");
                    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
                    li.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${book.img}"  style="width:40px; height:auto; margin-right:10px; border-radius:3px;">
                    <span>${book.name}</span>
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></button>
            `;
                    cartList.appendChild(li);
                });
            }

            cartCount.innerText = cart.length;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function clearCart() {
            cart = [];
            updateCart();
        }



        
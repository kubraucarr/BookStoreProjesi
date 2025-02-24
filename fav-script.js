 // Favoriler ve Sepet dizileri, örneğin localStorage kullanarak kalıcı hale getirilebilir
 let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 let cart = JSON.parse(localStorage.getItem('cart')) || [];

 function updateFavCount() {
   document.getElementById('fav-count').innerText = favorites.length;
 }
 function updateCartCount() {
   document.getElementById('cart-count').innerText = cart.length;
 }
 
 // Favorilere Ekleme Fonksiyonu
 function addToFavorites(cardId, bookName, bookImg) {
   // Favorilerde aynı kitabın tekrar eklenmesini engellemek için kontrol edilebilir.
   const exists = favorites.some(item => item.id === cardId);
   if(!exists) {
     favorites.push({ id: cardId, name: bookName, img: bookImg });
     localStorage.setItem('favorites', JSON.stringify(favorites));
     updateFavCount();
     alert(bookName + " favorilere eklendi!");
   } else {
     alert(bookName + " zaten favorilerde!");
   }
 }
 
 // Sepete Ekleme Fonksiyonu
 function addToCart(bookName, bookImg) {
   cart.push({ name: bookName, img: bookImg });
   localStorage.setItem('cart', JSON.stringify(cart));
   updateCartCount();
   alert(bookName + " sepete eklendi!");
 }
 
 updateFavCount();
 updateCartCount();

 
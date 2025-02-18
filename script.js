const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const booksVisible = 4; // Aynı anda görünen kitap sayısı
const bookWidth = 170; // Kitap genişliği + margin (150px + 20px)
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
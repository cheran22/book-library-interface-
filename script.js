const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 1200, image: "https://picsum.photos/200/300?1" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 899, image: "https://picsum.photos/200/300?2" },
  { title: "1984", author: "George Orwell", price: 650, image: "https://picsum.photos/200/300?3" },
  { title: "Pride and Prejudice", author: "Jane Austen", price: 499, image: "https://picsum.photos/200/300?4" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: 1500, image: "https://picsum.photos/200/300?5" },
  { title: "Moby Dick", author: "Herman Melville", price: 750, image: "https://picsum.photos/200/300?6" },
  { title: "War and Peace", author: "Leo Tolstoy", price: 2000, image: "https://picsum.photos/200/300?7" },
  { title: "Hamlet", author: "William Shakespeare", price: 399, image: "https://picsum.photos/200/300?8" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 950, image: "https://picsum.photos/200/300?9" },
  { title: "Brave New World", author: "Aldous Huxley", price: 720, image: "https://picsum.photos/200/300?10" }
];

const bookshelf = document.getElementById("bookshelf");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const formatINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});

function renderBooks(bookArray) {
  bookshelf.innerHTML = "";
  bookArray.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="book-info">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p class="book-price">${formatINR.format(book.price)}</p>
      </div>
    `;
    bookshelf.appendChild(card);
  });
}

if (bookshelf) renderBooks(books);

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(
      book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    renderBooks(filteredBooks);
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    let sortedBooks = [...books];
    if (sortSelect.value === "low-high") sortedBooks.sort((a, b) => a.price - b.price);
    else if (sortSelect.value === "high-low") sortedBooks.sort((a, b) => b.price - a.price);
    renderBooks(sortedBooks);
  });
}

const bookContainer = document.getElementById("bookContainer");
const searchInput = document.getElementById("searchInput");

// Display books
function displayBooks(bookList) {

    bookContainer.innerHTML = "";

    if (bookList.length === 0) {
        bookContainer.innerHTML = "<h2>No books found.</h2>";
        return;
    }

    bookList.forEach(book => {

        bookContainer.innerHTML += `
            <div class="book-card">

                <img src="${book.cover}" alt="${book.title}" width="100%" style="border-radius:10px; margin-bottom:15px;">

                <h2>${book.title}</h2>

                <p><strong>Author:</strong> ${book.author}</p>

                <p><strong>Category:</strong> ${book.category}</p>

                <p>${book.description}</p>

                <a href="${book.link}" target="_blank" class="read-btn">
                    📖 Read Book
                </a>

            </div>
        `;
    });

}

// Show all books when website opens
displayBooks(books);

// Search
searchInput.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(text) ||
        book.author.toLowerCase().includes(text) ||
        book.category.toLowerCase().includes(text)
    );

    displayBooks(filteredBooks);

});

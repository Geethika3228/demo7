const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", function () {
    const searchText = searchInput.value.toLowerCase().trim(); // lowercase + remove extra spaces

    let found = false; // track if any book matches

    books.forEach(book => {
        const title = book.querySelector("h3").innerText.toLowerCase();
        const category = book.querySelector("p").innerText.toLowerCase();

        if (title.includes(searchText) || category.includes(searchText)) {
            book.style.display = "grid"; // works with your CSS grid layout
        } else {
            book.style.display = "none";
        }
    });

    //  show "No books found" message
    let noBooksMsg = document.getElementById("noBooksMsg");
    if (!noBooksMsg) {
        noBooksMsg = document.createElement("p");
        noBooksMsg.id = "noBooksMsg";
        noBooksMsg.innerText = "No books found.";
        noBooksMsg.style.textAlign = "center";
        noBooksMsg.style.marginTop = "20px";
        document.querySelector(".resource-grid").appendChild(noBooksMsg);
    }

    noBooksMsg.style.display = found ? "none" : "block";
});

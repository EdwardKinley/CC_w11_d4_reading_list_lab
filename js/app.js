document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const newBook = document.createElement("ul");
    const newBookAuthor = document.createElement("li");
    const newBookTitle = document.createElement("li");
    const newBookCategory = document.createElement("li");

    newBookAuthor.textContent = `Author: ${author}`;
    newBookTitle.textContent = `Title: ${title}`;
    newBookCategory.textContent = `Category: ${category}`;
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookCategory);



    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newBook);
    form.reset();
  });

});

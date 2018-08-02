document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const newBook = document.createElement("p");
    newBook.textContent = `Author: ${author}; title: ${title}; category: ${category}.`;

    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newBook);
    form.reset();
  });

});

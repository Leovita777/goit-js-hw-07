const categories = document.querySelector('ul#categories');

const count = categories.querySelectorAll('li.item').length;
console.log('Number of categories:', count);

for (const category of categories.querySelectorAll('li.item')) {
  const title = category.querySelector('h2').textContent;

  const elements = categories.querySelectorAll('li');
  const elementCount = elements.length;

  console.log('Category:', title);
  console.log('Elements:', elementCount);
}

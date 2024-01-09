const categories = document.querySelector('ul#categories');

const count = categories.querySelectorAll('li.item').length;
console.log('Кількість категорій:', count);

for (const category of categories.querySelectorAll('li.item')) {
  const title = category.querySelector('h2').textContent;

  const elements = category.querySelectorAll(':scope > ul > li');
  const elementCount = elements.length;

  console.log('Категорія:', title);
  console.log('Елементи:', elementCount);
}

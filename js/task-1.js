const listItem = document.querySelectorAll('li.item');
console.log(`Кількість категорій: ${listItem.length}`);

listItem.forEach(function(item) {
    const title = item.querySelector('h2').textContent; 
    const count = item.querySelectorAll('li').length;   
    console.log(`Категорія: ${title}, Кількість елементів: ${count}`);
});










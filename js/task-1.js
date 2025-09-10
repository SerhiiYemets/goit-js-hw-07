const listItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach(function(item) {
    const title = item.querySelector('h2').textContent; 
    const count = item.querySelectorAll('li').length;   
    console.log(`Category: ${title}`)
    console.log(`Elements: ${count}`);
});











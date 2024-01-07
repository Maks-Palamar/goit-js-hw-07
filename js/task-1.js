const elems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${elems.length}`);

elems.forEach(function(item) {
    const heading = item.querySelector('h2');
    console.log(`Category: ${heading.textContent}`);

    const itemLiNum = item.querySelectorAll('li');
    console.log(`Elements: ${itemLiNum.length}`);
});

